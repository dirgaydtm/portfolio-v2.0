import { Mail } from "lucide-react";
import { LayeredButton } from "@/shared/components/layered-button";
import type { SocialLink } from "@/shared/types/profile";

interface ContactSocialsProps {
    email: string;
    socials: readonly SocialLink[];
    className?: string;
}

export default function ContactSocials({ email, socials, className }: ContactSocialsProps) {
    return (
        <div className={className}>
            <LayeredButton as="a" href={`mailto:${email}`} variant="outline" className="justify-start">
                <Mail className="h-4 w-4" />
                <p className="hidden md:block">{email}</p>
            </LayeredButton>
            {socials.map((social) => {
                const Icon = social.icon;
                return (
                    <LayeredButton as="a" href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} key={`${social.name}-${social.url}`} variant="outline" className="justify-start">
                        <Icon className="h-4 w-4" />
                        <p className="hidden md:block">{social.name}</p>
                    </LayeredButton>
                );
            })}
        </div>
    );
}

