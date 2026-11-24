import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/data/site";

export const metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you use games and services from ${site.legalName} (${site.name}).`,
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms", title: `Terms of Service · ${site.name}` },
};

const toc = [
  "Who we are and what these terms cover",
  "Accepting these terms",
  "Your licence to use our games",
  "Age and parental permission",
  "Virtual currency and items",
  "Advertising and rewarded ads",
  "Acceptable use",
  "Intellectual property",
  "Feedback and support",
  "Third-party services",
  "Updates, availability and changes to games",
  "Your consumer rights and our responsibility",
  "Suspension and termination",
  "Privacy",
  "Governing law and disputes",
  "Changes to these terms",
  "Contact us",
].map((title, i) => ({ id: `t${i + 1}`, title: `${i + 1}. ${title}` }));

const H = ({ n }) => <h2 id={toc[n - 1].id}>{toc[n - 1].title}</h2>;
const Email = () => <a href={`mailto:${site.email}`}>{site.email}</a>;

export default function TermsPage() {
  const L = site.legalName;
  return (
    <LegalLayout
      title="Terms of Service"
      updated={site.legalUpdated}
      intro={`These terms apply to ${site.name} games published by ${L} and to ${site.url.replace(/^https?:\/\//, "")}.`}
      toc={toc}
    >
      <p><strong>Effective date and last updated:</strong> {site.legalUpdated}</p>

      <H n={1} />
      <p>
        {L} (trading as {site.name}, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a {site.company.type.toLowerCase()} registered in{" "}
        {site.company.jurisdiction}, with its registered office at {site.company.address.join(", ")}. These terms apply to our mobile games and applications
        that link to them (each an &quot;Application&quot;), this website, and related support services (together, the &quot;Services&quot;).
      </p>
      <p>
        If an Application has additional rules shown in the app or its store listing, those rules apply to that Application alongside these terms. If they
        conflict, the Application-specific rules apply for that Application.
      </p>

      <H n={2} />
      <p>
        By downloading, installing, or using an Application or this website, you agree to these terms. If you do not agree, please do not use the Services.
        Downloading an Application from Google Play is also subject to Google Play&apos;s own terms, which are between you and Google.
      </p>

      <H n={3} />
      <p>
        Subject to these terms, we grant you a personal, limited, non-exclusive, non-transferable, revocable licence to install and use each Application on
        devices you own or control, for your own non-commercial entertainment. You may not copy, sell, rent, sublicense, modify, reverse-engineer, decompile,
        or create derivative works from an Application, except where applicable law expressly permits it and cannot be excluded by contract.
      </p>

      <H n={4} />
      <p>
        Each Application has its own intended audience and age rating, as described in its store listing. If you are under the age of digital consent in
        your country, you must have permission from a parent or guardian to use the Services, and they should review these terms and our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> with you.
      </p>

      <H n={5} />
      <p>
        Our games may include coins, gems, boosters, rewards, or other virtual items (&quot;Virtual Items&quot;). Virtual Items are part of the game only. They
        have <strong>no cash value</strong>, cannot be withdrawn, sold, transferred, or exchanged for money or anything of monetary value, and are not your
        property. Any game that uses casino-style or slot-style mechanics is for entertainment only: it does not offer real-money gambling or the chance to
        win money or prizes.
      </p>
      <p>
        Game progress and Virtual Items are usually stored on your device. Uninstalling a game, clearing its storage, or changing devices may permanently
        remove them, and we may be unable to restore them. We may change, rebalance, or remove Virtual Items as part of improving a game.
      </p>
      <p>
        If an Application ever offers in-app purchases, they are processed by Google Play under its terms, and your statutory rights for digital content
        apply. Refund requests for Google Play purchases are handled through Google Play.
      </p>

      <H n={6} />
      <p>
        Our games are free to download and may be supported by advertising, including banners, interstitials, and optional rewarded ads. A reward is granted
        only when a rewarded ad completes successfully; an unfinished or failed ad does not earn a reward. Ads are provided by third parties such as Google
        AdMob and Appodeal, and your advertising choices are explained in our <Link href="/privacy-policy">Privacy Policy</Link>. We are not responsible for
        the content of third-party ads or the products they promote, but you can report an inappropriate ad to us.
      </p>

      <H n={7} />
      <p>When using the Services you agree not to:</p>
      <ul>
        <li>use cheats, exploits, automation software, bots, hacks, or modified clients, or manipulate rewards, ads, or Virtual Items;</li>
        <li>interfere with, disrupt, overload, or attempt to gain unauthorised access to the Services, our systems, or those of our providers;</li>
        <li>generate fraudulent ad impressions or clicks, or encourage others to do so;</li>
        <li>use the Services for any unlawful purpose or in breach of the rules of the store you downloaded them from;</li>
        <li>remove or alter any copyright, trademark, or other proprietary notice.</li>
      </ul>

      <H n={8} />
      <p>
        The Services, including games, code, artwork, characters, music, sounds, text, logos, and the {site.name} name and logo, are owned by or licensed to{" "}
        {L} and are protected by intellectual property laws. Except for the licence in section 3, no rights are granted to you. Third-party trademarks, such
        as Google Play and the Google Play logo, belong to their owners.
      </p>

      <H n={9} />
      <p>
        We welcome ideas, bug reports, and suggestions. If you send us feedback, you allow us to use it to improve our games without any obligation to you.
        For support, contact <Email /> and include the game name, your device model, and a description of the issue.
      </p>

      <H n={10} />
      <p>
        The Services rely on third-party platforms and services, such as Google Play, Google Play Services, and advertising providers. Your use of those
        services is governed by their own terms and privacy policies. We are not responsible for third-party websites or services that we link to or that
        operate independently of us.
      </p>

      <H n={11} />
      <p>
        We may update, change, or discontinue an Application or any feature, including to fix bugs, improve gameplay, maintain security, or comply with
        law or platform requirements. Some updates may be required to keep playing. We aim to keep the Services available but do not guarantee they will
        always be available, uninterrupted, or error-free, or compatible with every device.
      </p>

      <H n={12} />
      <p>
        If you are a consumer, you have legal rights in relation to digital content that is faulty or not as described. Nothing in these terms affects those
        rights or any other rights that cannot be excluded or limited by law.
      </p>
      <p>
        We do not exclude or limit our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for
        anything else that cannot be excluded or limited by law. Subject to that, we are not responsible for loss or damage that was not foreseeable, for
        business losses (our games are for personal use only), or for loss of Virtual Items or game progress stored on your device. If digital content we
        supply damages a device or other digital content belonging to you because we did not use reasonable care and skill, we will either repair the damage
        or pay you compensation, unless you could have avoided it by following our advice or installing a free update.
      </p>

      <H n={13} />
      <p>
        You can stop using the Services at any time by uninstalling the Application. We may suspend or end your access to the Services if you seriously or
        repeatedly breach these terms, if required by law, or to protect the Services or other players. Sections that by their nature should continue after
        termination, including sections 5, 8, 12, and 15, will continue to apply.
      </p>

      <H n={14} />
      <p>
        Our <Link href="/privacy-policy">Privacy Policy</Link> explains how we and our partners process personal information in connection with the
        Services, including advertising, children&apos;s privacy, and your rights.
      </p>

      <H n={15} />
      <p>
        These terms are governed by the law of England and Wales. You can bring proceedings in the courts of England and Wales. If you live in Scotland or
        Northern Ireland, you can also bring proceedings in your local courts. If you live elsewhere, you may also benefit from mandatory consumer protection
        laws and courts of the country where you live. Please contact us first so we can try to resolve any issue informally.
      </p>

      <H n={16} />
      <p>
        We may update these terms to reflect changes in our Services, law, or platform rules. We will revise the date at the top of this page when we do.
        Where a change materially affects you, we will give reasonable notice through the Application or another appropriate channel. If you continue to use
        the Services after a change takes effect, the updated terms will apply; if you do not agree, please stop using the Services.
      </p>

      <H n={17} />
      <p>
        For questions about these terms, contact <strong>{L}</strong> at <Email />, or write to {L}, {site.company.address.join(", ")}. The current version
        of these terms is available at <a href={`${site.url}/terms`}>{site.url}/terms</a>.
      </p>
    </LegalLayout>
  );
}
