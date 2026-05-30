import { Mail, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const lastUpdated = 'May 27, 2026';
const companyName = 'GENAIXIS LABS PRIVATE LIMITED';
const contactEmail = 'contact@genaixis.com';
const companyAddress =
  'Ground Floor, Kondapur Main Road, Kondapur, Laxmi Cyber City, Whitefields, Kondapur, Hyderabad, Telangana 500081';

interface LegalSection {
  title: string;
  content: string[];
}

interface LegalPageProps {
  title: string;
  description: string;
  canonicalPath: string;
  keywords: string;
  sections: LegalSection[];
}

function LegalPage({ title, description, canonicalPath, keywords, sections }: LegalPageProps) {
  return (
    <main>
      <SEO title={`${title} | GENAIXIS LABS PRIVATE LIMITED`} description={description} keywords={keywords} canonicalPath={canonicalPath} noIndex />
      <PageHero tag="Legal" title={title} description={description} />

      <section className="relative py-20">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
            </div>
            <h2 className="mt-5 text-xl font-bold text-white">{companyName}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Last updated: {lastUpdated}</p>
            <p className="mt-4 text-sm leading-6 text-slate-400">{companyAddress}</p>
            <a href={`mailto:${contactEmail}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white">
              <Mail className="h-4 w-4" />
              {contactEmail}
            </a>
            <p className="mt-6 rounded-xl border border-amber-300/15 bg-amber-300/[0.04] p-4 text-xs leading-5 text-amber-100/80">
              This page is a general website policy draft for business use and should be reviewed by a qualified legal professional for final compliance.
            </p>
          </aside>

          <article className="rounded-2xl border border-white/10 bg-[#07101a] p-6 shadow-2xl shadow-cyan-950/10 sm:p-8">
            <div className="space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.content.map((paragraph) => (
                      <p key={paragraph} className="leading-7 text-slate-400">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      canonicalPath="/privacy-policy"
      keywords="GENAIXIS privacy policy, GENAIXIS data policy, LearnStackHub privacy, AI software company privacy"
      description="Read how GENAIXIS LABS PRIVATE LIMITED collects, uses, protects, and handles information through its company website and related digital services."
      sections={[
        {
          title: '1. Introduction',
          content: [
            `${companyName} respects your privacy and is committed to protecting personal information shared through our website, contact forms, career inquiries, business communications, and related digital services.`,
            'By using this website, you agree to the practices described in this Privacy Policy.',
          ],
        },
        {
          title: '2. Information We May Collect',
          content: [
            'We may collect information such as your name, email address, phone number, company name, job title, resume details, project requirements, and any message or attachment you voluntarily submit to us.',
            'We may also collect basic technical information such as browser type, device information, IP address, referring pages, approximate location, and website usage activity through cookies, analytics tools, server logs, or similar technologies.',
          ],
        },
        {
          title: '3. How We Use Information',
          content: [
            'We use information to respond to inquiries, discuss services, review career applications, provide support, improve website performance, understand user interest, protect our systems, and communicate about relevant GENAIXIS products or services.',
            'We do not sell personal information. We only share information when required for business operations, legal compliance, security, or service delivery through trusted providers.',
          ],
        },
        {
          title: '4. Data Protection',
          content: [
            'We use reasonable administrative, technical, and organizational measures to protect information from unauthorized access, misuse, disclosure, alteration, or loss.',
            'No internet transmission or electronic storage method is completely secure, so we cannot guarantee absolute security.',
          ],
        },
        {
          title: '5. Data Retention',
          content: [
            'We retain personal information only for as long as reasonably needed for the purpose for which it was collected, including business communication, legal, accounting, dispute resolution, and compliance requirements.',
          ],
        },
        {
          title: '6. Your Choices',
          content: [
            `You may contact us at ${contactEmail} to request access, correction, deletion, or restriction of your personal information where applicable by law.`,
            'You can disable cookies through your browser settings, though some website features or analytics may not function as intended.',
          ],
        },
        {
          title: '7. Third Party Links',
          content: [
            'Our website may link to third party websites such as LearnStackHub, Google Maps, social platforms, or external tools. We are not responsible for the privacy practices or content of those websites.',
          ],
        },
        {
          title: '8. Contact',
          content: [
            `For privacy questions or requests, contact ${companyName} at ${contactEmail}.`,
          ],
        },
      ]}
    />
  );
}

export function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms and Conditions"
      canonicalPath="/terms-and-conditions"
      keywords="GENAIXIS terms and conditions, GENAIXIS terms of service, AI software company terms, LearnStackHub terms"
      description="Read the terms and conditions for using the GENAIXIS LABS PRIVATE LIMITED website and related company information."
      sections={[
        {
          title: '1. Acceptance of Terms',
          content: [
            `These Terms and Conditions govern your use of the ${companyName} website. By accessing or using this website, you agree to these terms.`,
            'If you do not agree, please do not use this website.',
          ],
        },
        {
          title: '2. Website Purpose',
          content: [
            'This website provides information about GENAIXIS, our products, technology direction, services, career opportunities, contact details, and related company updates.',
            'Website content is provided for general information and business communication purposes only.',
          ],
        },
        {
          title: '3. Intellectual Property',
          content: [
            'All website content, including text, design, graphics, logos, layouts, code, images, and brand elements, belongs to GENAIXIS or its licensors unless otherwise stated.',
            'You may not copy, reproduce, modify, distribute, sell, or exploit website content without prior written permission from GENAIXIS.',
          ],
        },
        {
          title: '4. Acceptable Use',
          content: [
            'You agree not to misuse this website, attempt unauthorized access, disrupt website operations, upload harmful code, scrape content at scale, impersonate others, or use the website for unlawful purposes.',
            'We may restrict access to users or systems that appear to misuse, attack, or interfere with the website.',
          ],
        },
        {
          title: '5. Services and Proposals',
          content: [
            'Information on this website does not create a client relationship, employment relationship, partnership, or binding service agreement.',
            'Any project, service, employment, or commercial engagement with GENAIXIS will be governed by a separate written agreement, offer, statement of work, or contract.',
          ],
        },
        {
          title: '6. Third Party Websites',
          content: [
            'This website may contain links to third party platforms or services. GENAIXIS is not responsible for third party content, availability, policies, or practices.',
          ],
        },
        {
          title: '7. Disclaimer',
          content: [
            'We aim to keep website information accurate and up to date, but we do not guarantee that all content is complete, current, error-free, uninterrupted, or suitable for every purpose.',
            'The website is provided on an as-is and as-available basis.',
          ],
        },
        {
          title: '8. Limitation of Liability',
          content: [
            'To the fullest extent permitted by law, GENAIXIS will not be liable for indirect, incidental, consequential, special, or punitive damages arising from your use of this website.',
          ],
        },
        {
          title: '9. Changes to Terms',
          content: [
            'We may update these Terms and Conditions from time to time. Updated terms will be posted on this page with a revised update date.',
          ],
        },
        {
          title: '10. Contact',
          content: [
            `For questions about these Terms and Conditions, contact us at ${contactEmail}.`,
          ],
        },
      ]}
    />
  );
}

export function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      canonicalPath="/cookie-policy"
      keywords="GENAIXIS cookie policy, website cookies, analytics cookies, LearnStackHub cookies"
      description="Read how GENAIXIS LABS PRIVATE LIMITED may use cookies and similar technologies on its website."
      sections={[
        {
          title: '1. What Are Cookies',
          content: [
            'Cookies are small text files placed on your device by websites. They help websites remember preferences, understand usage, improve performance, and support security or analytics.',
          ],
        },
        {
          title: '2. How We May Use Cookies',
          content: [
            'GENAIXIS may use cookies or similar technologies to operate the website, remember basic preferences, analyze traffic, understand how visitors use pages, improve content, and protect website reliability.',
            'At present, our website is primarily informational. If additional analytics, advertising, chat, forms, or embedded services are added later, those tools may set their own cookies.',
          ],
        },
        {
          title: '3. Types of Cookies',
          content: [
            'Essential cookies support core website functions such as page loading, routing, security, and basic operation.',
            'Analytics cookies help us understand visitor activity, page performance, and content interest so we can improve the website.',
            'Third party cookies may be set by external services such as maps, social links, video embeds, analytics providers, or other integrations when used.',
          ],
        },
        {
          title: '4. Managing Cookies',
          content: [
            'You can manage, block, or delete cookies through your browser settings. Blocking some cookies may affect website performance or functionality.',
            'Browser controls vary by provider, so please check your browser help section for cookie management instructions.',
          ],
        },
        {
          title: '5. Updates to This Policy',
          content: [
            'We may update this Cookie Policy when our website features, analytics tools, or legal requirements change.',
          ],
        },
        {
          title: '6. Contact',
          content: [
            `For cookie-related questions, contact ${companyName} at ${contactEmail}.`,
          ],
        },
      ]}
    />
  );
}
