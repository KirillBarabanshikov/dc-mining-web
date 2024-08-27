import { forwardRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_SITE_KEY } from '@/shared/consts';

interface ICaptchaProps {
    onCaptchaVerify: (verify: boolean) => void;
    onExpired: () => void;
}

export const Captcha = forwardRef<ReCAPTCHA | null, ICaptchaProps>(({ onCaptchaVerify, onExpired }, ref) => {
    const handleCaptchaVerify = (token: any) => {
        if (token) {
            onCaptchaVerify(true);
        } else {
            onCaptchaVerify(false);
        }
    };

    return <ReCAPTCHA ref={ref} sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptchaVerify} onExpired={onExpired} />;
});
