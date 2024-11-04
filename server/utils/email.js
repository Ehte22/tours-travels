const mailer = require("nodemailer");

exports.sendEmail = ({ to, otp }) => new Promise((resolve, reject) => {
    const transport = mailer.createTransport({
        auth: {
            user: process.env.FROM_EMAIL,
            pass: process.env.FROM_PASS
        },
        service: "gmail"
    });

    const htmlTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; background-color: #f9f9f9;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; background-color: white;">
            <tr>
                <td style="padding: 30px; text-align: center; background-color: #cd2c22; color: white;">
                    <h1 style="margin: 0; font-size: 24px;">Password Reset Request</h1>
                </td>
            </tr>
            <tr>
                <td style="padding: 20px; font-size: 16px; line-height: 24px; color: #555555;">
                    <p style="margin: 0 0 20px;">Dear User,</p>
                    <p style="margin: 0 0 20px;">
                        We received a request to reset your password. Please use the OTP below to reset your password. This OTP is valid for the next 10 minutes:
                    </p>
                    <div style="text-align: center; margin: 20px 0;">
                        <span style="display: inline-block; font-size: 30px; color: #cd2c22; font-weight: bold; padding: 10px 20px; border: 2px solid #cd2c22; border-radius: 5px;">
                            ${otp}
                        </span>
                    </div>
                    <p style="margin: 0 0 20px;">
                        If you didn’t request a password reset, you can safely ignore this email. Your password will not be changed.
                    </p>
                    <p style="margin: 0 0 20px;">
                        Sincerely,<br>
                        The Support Team
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 20px; text-align: center; background-color: #eeeeee; color: #777777; font-size: 12px;">
                    <p style="margin: 0;">You received this email because you requested a password reset for your account.</p>
                    <p style="margin: 0;">If you didn’t make this request, please contact our support team immediately.</p>
                </td>
            </tr>
        </table>
    </div>`;

    // Send the email
    transport.sendMail({
        to,
        subject: 'Your OTP for Password Reset Request',
        text: `Your OTP for password reset is ${otp}`,
        html: htmlTemplate
    }, (err) => {
        if (err) {
            console.log(err);
            reject("Unable to send email: " + err.message);
        } else {
            console.log(`Email sent to ${to} successfully`);
            resolve(true);
        }
    });
});
