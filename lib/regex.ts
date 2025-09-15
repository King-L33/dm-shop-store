export const slugFormat = new RegExp(/^[a-z-0-9]{2,80}$/);
export const amountFormat = new RegExp(/^[0-9]{0,6}$/);
export const nameFormat = new RegExp(/^[a-zA-Z0-9 ]{2,80}$/);
export const linkFormat = new RegExp(/^[/][a-z]{4,20}$/);
export const descriptionFormat = new RegExp(
  /^[a-zA-Z0-9 -./';,:?<>é&|() "]{20,2500}$/
);
export const phoneValidation = new RegExp(
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
);
export const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
);
export const clerkUserIdFormat = new RegExp(/^user_[a-zA-Z]$/);
