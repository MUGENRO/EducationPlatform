# Configuration

## Education Platform

Education Platform is designed as an AI-native education technology platform developed by **MUGENRO**.

The current version contains a demonstration configuration for **London School**.

This document describes the configuration structure currently used by the project and explains the role of client-specific configuration within the platform.

---

## Configuration Architecture

Education Platform separates product logic from school-specific information.

The current architecture uses:

- `data/school.ts` — school-specific configuration
- `app/components/ChatDemo.tsx` — chatbot interface and interaction logic
- `lib/supabase.ts` — Supabase client configuration
- `app/layout.tsx` — application metadata and root layout

The current implementation is a demonstration configuration rather than a fully multi-tenant platform.

---

## School Configuration

The current school configuration is located at:

`data/school.ts`

This file contains the information used by the current London School demonstration.

The configuration includes:

- School name
- Assistant subtitle
- Welcome message
- Target audience options
- Educational directions
- Learning goals
- Language learning formats
- Language levels
- Child age groups
- Preferred study times
- Name collection prompts
- Phone collection prompt
- Registration success message
- School contact phone number

---

## Current Client

The current demonstration is configured for:

**London School**

The school configuration is used to demonstrate how an educational organization can interact with students or parents through an AI-assisted conversational interface.

The current configuration should be treated as demonstration data.

---

## Configuration Example

The current configuration follows a structure similar to:

- School identity
- Welcome experience
- Audience selection
- Educational directions
- Learning goals
- Student information
- Contact information
- Registration confirmation

This structure allows the chatbot experience to be adapted to different educational organizations without changing the basic concept of the platform.

---

## Client-Specific Data

Client-specific information should remain separated from the core application logic whenever possible.

Examples of client-specific information include:

- Organization name
- Contact information
- Available courses
- Educational directions
- Target audiences
- Learning goals
- Age groups
- Available schedules
- Assistant messages
- Registration messages

The current project demonstrates this approach through `data/school.ts`.

---

## Application Logic

The main conversational interface is implemented in:

`app/components/ChatDemo.tsx`

The component currently handles the interactive demonstration flow, including:

- Displaying the assistant interface
- Presenting available options
- Collecting user information
- Handling conversation state
- Processing registration information
- Sending registration data to Supabase
- Displaying the final confirmation message

The current implementation is optimized for the London School demonstration.

---

## Database Integration

Supabase integration is located in:

`lib/supabase.ts`

The application uses environment variables for the Supabase connection.

Required environment variables include:

`NEXT_PUBLIC_SUPABASE_URL`

`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

These values should be configured through the deployment environment and should not be hardcoded into the source code.

---

## Environment Configuration

Environment-specific credentials and configuration values must not be committed to the repository.

Local development should use an appropriate environment configuration file such as:

`.env.local`

Production deployments should configure environment variables through the hosting provider.

Do not commit:

- Private API keys
- Service-role keys
- Passwords
- Database credentials
- Authentication secrets
- Private tokens

---

## Branding

Education Platform branding assets are located at:

`public/branding/`

Current branding files include:

- `education-platform-logo.png`
- `education-platform-banner.png`

These assets represent the Education Platform product identity.

Client-specific branding may be introduced separately as the platform evolves.

---

## Current Demonstration Model

The current version should be understood as:

**Education Platform**

→ product platform

→ London School configuration

→ conversational education assistant

→ registration workflow

This structure demonstrates the intended separation between the platform and the organization using it.

---

## Future Configuration Direction

As Education Platform evolves, the configuration architecture may be expanded to support multiple educational organizations.

A future implementation may introduce concepts such as:

- Client profiles
- Organization configuration
- Custom branding
- Custom educational programs
- Custom chatbot flows
- Custom registration workflows
- Organization-specific analytics
- Organization-specific integrations
- Multi-user administration

These capabilities are part of the future product direction and are not considered fully implemented by the current configuration system.

---

## Versioning

Education Platform follows product versioning independently from individual client configurations.

The current product version is:

**v1.0.0**

Client-specific configurations may evolve independently as part of deployments, demonstrations, or future customer implementations.

---

## Development Principle

Configuration should remain separate from core application logic whenever practical.

The goal is to make the platform increasingly adaptable without requiring the core application to be rewritten for every educational organization.

The long-term direction is to allow MUGENRO to provide a reusable software platform that can be configured and deployed for different educational environments.

---

## Important Note

The current London School implementation is a demonstration configuration.

It should not be interpreted as evidence that the platform already provides complete multi-tenant functionality.

Future architectural changes should preserve the distinction between:

**Platform Core**

and

**Client Configuration**

This separation is an important part of the long-term architecture of Education Platform.

---

## MUGENRO

Education Platform is developed as part of the MUGENRO software ecosystem.

MUGENRO is an AI-native software company focused on intelligent software products, automation systems, and next-generation software infrastructure.

> **Build. Automate. Evolve.**

---

© 2026 MUGENRO
