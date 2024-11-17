

## Getting Started


### Set up Resend account

1. Create a Resend account (from 1:19 in video).
2. Navigate to the "Domains" page, press "Add Domain", and enter your domain
3. Set the 3 DNS records on your domain your domain provider and click the "Verify" button on the Resend domain dashboard. Wait for the records to verify, this may take a few minutes to a few hours depending on your domain provider.
4. Once your domain is verified, navigate to the "API Keys" page, generate an API key, and copy it to your clipboard.
5. Set the `RESEND_API_KEY` environment variable to the Resend API key you just generated in `.env`.

### Install dependencies

```bash
npm install
```

### Set up Prisma

```bash
npx prisma generate

npx prisma db push
```

### Run development server 
```bash
npm run dev
```

## Deploy on Vercel
The easiest way to deploy this project is to use the [Vercel Platform](https://vercel.com/docs/deployments/overview) from the creators of Next.js.
