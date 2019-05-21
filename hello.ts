interface User {
  emails: string[]
}

// User.emails
// error TS2713: Cannot access 'User.emails' because 'User' is a type, but not a namespace. Did you mean to retrieve the type of the property 'emails' in 'User' with 'User["emails"]'?
function printEmails(emails: User['emails']) {
  console.log(emails);
}

const user: User = {
  emails: ['a@test.com', 'b@test.com']
}

printEmails(user.emails);
