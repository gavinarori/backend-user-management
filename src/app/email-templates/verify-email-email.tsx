import * as React from 'react';

interface VerifyEmailEmailTemplateProps {
    email: string;
    emailVerificationToken: string;
}

export const VerifyEmailEmailTemplate: React.FC<Readonly<VerifyEmailEmailTemplateProps>> = ({  emailVerificationToken }) => (
    <div>
        <p>
            To verify your email, click on this link:
        </p>
        <a href={`http://localhost:3000/auth/verify-email?token=${emailVerificationToken}`}>
            Click here to verify your email
        </a>
    </div>
);
