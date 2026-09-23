export type ContactFormValues = {
  name: string;
  phone: string;
  description: string;
  company_website: string;
};

export type ContactFormErrors = Partial<Record<keyof Omit<ContactFormValues, "company_website">, string>>;

export function normalizePhone(phone: string): string {
  return phone.replace(/[\s-]/g, "");
}

export function validateName(name: string): string | undefined {
  if (!name) return undefined; // optional
  if (name.length < 2 || name.length > 80) return "Name must be between 2 and 80 characters.";
  return undefined;
}

export function validatePhone(phone: string): string | undefined {
  if (!phone) return "Phone number is required.";
  const normalized = normalizePhone(phone);
  if (!/^\+?\d{10,15}$/.test(normalized)) {
    return "Enter a valid phone number (10-15 digits).";
  }
  return undefined;
}

export function validateDescription(description: string): string | undefined {
  if (!description) return "Please describe what you need.";
  if (description.length < 10 || description.length > 1000) {
    return "Description must be between 10 and 1000 characters.";
  }
  return undefined;
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const nameError = validateName(values.name);
  if (nameError) errors.name = nameError;

  const phoneError = validatePhone(values.phone);
  if (phoneError) errors.phone = phoneError;

  const descriptionError = validateDescription(values.description);
  if (descriptionError) errors.description = descriptionError;

  return errors;
}
