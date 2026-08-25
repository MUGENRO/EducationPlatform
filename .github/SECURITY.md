# Security Policy

Security is a fundamental part of the Education Platform engineering philosophy.

Education Platform is an official product of **MUGENRO**, an AI-native software company focused on building reliable, intelligent, and secure software systems.

We take security vulnerabilities seriously and encourage responsible disclosure.

---

## Supported Versions

Security updates are primarily provided for actively maintained stable releases.

| Version | Supported |
|---|---|
| 1.x | Yes |
| < 1.0 | No |

Support status may change as new major versions are released.

---

## Reporting a Vulnerability

Please do **not** publicly disclose security vulnerabilities through GitHub Issues or public pull requests.

If you discover a potential security vulnerability, report it privately to the project maintainers.

Include:

- A clear description of the vulnerability.
- The affected component or functionality.
- Steps required to reproduce the issue.
- Potential security impact.
- Relevant logs, screenshots, or proof-of-concept information when appropriate.
- Any suggested mitigation, if available.

Please avoid including sensitive personal information or real user data in a report.

---

## Responsible Disclosure

We ask security researchers and contributors to:

- Give the maintainers reasonable time to investigate.
- Avoid publicly disclosing the vulnerability before a fix or mitigation is available.
- Avoid accessing, modifying, or deleting data that does not belong to you.
- Avoid disrupting production systems or services.
- Avoid exploiting a vulnerability beyond what is reasonably necessary to demonstrate the issue.

Security research should be conducted responsibly and with minimal impact.

---

## What to Expect

After receiving a security report, the maintainers will:

1. Review the report.
2. Confirm whether the issue is reproducible.
3. Assess the severity and potential impact.
4. Determine an appropriate mitigation or fix.
5. Release a security update when appropriate.
6. Communicate relevant information to the reporter when possible.

Response times may vary depending on the severity and complexity of the issue.

---

## Security Severity

Security issues may be evaluated according to their potential impact.

Examples include:

- **Critical** — severe vulnerabilities that may compromise systems, sensitive data, or core infrastructure.
- **High** — significant vulnerabilities with substantial security impact.
- **Medium** — vulnerabilities with limited or conditional impact.
- **Low** — minor security issues or weaknesses with limited practical impact.

Severity may be adjusted based on the actual circumstances and exploitability of the issue.

---

## Sensitive Information

Do not include the following information in public issues or pull requests:

- Passwords
- API keys
- Authentication tokens
- Private keys
- Database credentials
- Personal information
- Production secrets
- Private configuration values
- Customer data

If sensitive information is accidentally exposed, revoke or rotate the affected credential immediately.

---

## Dependencies

Education Platform uses third-party software dependencies.

Dependencies should be:

- Kept reasonably up to date.
- Reviewed for known vulnerabilities.
- Updated when security issues are identified.
- Removed when they are no longer necessary.

Automated dependency updates may be used where appropriate.

---

## Application Security

Security considerations should be applied across:

- Authentication
- Authorization
- User data
- APIs
- Database access
- External integrations
- Client-side functionality
- Server-side functionality
- Dependency management
- Deployment infrastructure
- AI-powered features

Security should be considered during design, development, testing, and deployment.

---

## AI Security

Because Education Platform incorporates an AI-native development direction, AI-related security risks must also be considered.

These may include:

- Prompt injection
- Unauthorized data exposure
- Improper tool execution
- Insecure AI integrations
- Sensitive information leakage
- Unsafe automated actions
- Manipulation of AI-assisted workflows

AI systems must not be given unnecessary access to sensitive resources.

AI-generated code and configurations must be reviewed before being used in production.

---

## Production Security

Production deployments should follow appropriate security practices, including:

- Secure environment variables
- Restricted access credentials
- HTTPS
- Authentication and authorization controls
- Secure API configuration
- Dependency monitoring
- Logging and monitoring
- Regular security review

Production secrets must never be committed to the repository.

---

## Security Updates

Security fixes may be released as:

- Patch releases
- Minor releases
- Major releases

depending on the nature and compatibility requirements of the change.

Critical vulnerabilities may receive an expedited response.

---

## Scope

This security policy applies to the Education Platform repository and its officially maintained components.

Third-party services, infrastructure, and external systems may have their own security policies and reporting procedures.

---

## MUGENRO Security Philosophy

MUGENRO believes that security is not an isolated feature.

It is a continuous engineering responsibility.

The long-term goal is to build software systems that are:

- Reliable
- Secure
- Resilient
- Maintainable
- Transparent
- Responsible

> **Build securely. Automate responsibly. Evolve continuously.**

---

## Contact

For security-related matters, use the private communication channels available through the project maintainers.

Do not publish vulnerability details in public GitHub issues.

---

© 2026 MUGENRO
