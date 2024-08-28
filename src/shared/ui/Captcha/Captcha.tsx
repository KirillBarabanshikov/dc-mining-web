import { forwardRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import clsx from 'clsx';
import { RECAPTCHA_SITE_KEY } from '@/shared/consts';

interface ICaptchaProps {
    onCaptchaVerify: (verify: boolean) => void;
    onExpired: () => void;
    className?: string;
}

export const Captcha = forwardRef<ReCAPTCHA | null, ICaptchaProps>(({ onCaptchaVerify, onExpired, className }, ref) => {
    const handleCaptchaVerify = (token: any) => {
        if (token) {
            onCaptchaVerify(true);
        } else {
            onCaptchaVerify(false);
        }
    };

    return (
        <div style={{ transformOrigin: '0 0' }} className={clsx(className)}>
            <ReCAPTCHA ref={ref} sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptchaVerify} onExpired={onExpired} />
        </div>
    );
});
