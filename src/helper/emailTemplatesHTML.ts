import { formatAsMoney } from "../helper/formatMoney";


export const emailTemplate = (template: string, otherData: any) => {
  switch (template) {
    case 'welcome':
      return `
      <body style="font-family: Roboto, Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333; line-height: 1.6;">
 <div style="background-image: url('https://firebasestorage.googleapis.com/v0/b/gidillo.appspot.com/o/gidillo%2Flogo%20(1).webp?alt=media&token=c9420c6a-01ed-4d30-9475-73494953c45a'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 100px; height: 100px;">
</div>
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #2C3E50; font-size: 24px;">Welcome, ${otherData.name}!</h2>

    <p style="font-size: 16px; color: #555;">
      As the CEO, I’m thrilled to have you join our community. At GIDILLO, we’re more than just a platform; we’re your trusted partner for seamless real estate transactions. Here’s what makes us special:
    </p>

    <ol style="font-size: 16px; color: #555; padding-left: 20px;">
      <li><b>All-in-One Solution:</b> GIDILLO simplifies the entire real estate journey. Whether you’re buying, selling, or renting, we’ve got you covered. No more jumping between different platforms—we’re your one-stop shop.</li>
      <li><b>Digital Revolution:</b> We’re leveraging cutting-edge technology to transform the industry. Say goodbye to paperwork and hello to efficiency!</li>
      <li><b>Cost Savings:</b> With GIDILLO, unnecessary costs vanish. We believe in transparency and fair pricing. You’ll save both time and money.</li>
      <li><b>Efficiency Boost:</b> Our platform streamlines processes, so you can focus on what matters most—finding your dream home or closing that deal.</li>
    </ol>

    <p style="font-size: 16px; color: #555;">Here’s what to expect:</p>
    <ul style="font-size: 16px; color: #555; padding-left: 20px;">
      <li>Explore our listings and discover properties that match your vision.</li>
      <li>Indicate your interests and provide your phone number to be called.</li>
      <li>Stay informed with market insights and trends.</li>
    </ul>

    <p style="font-size: 16px; color: #555;">
      Ready to dive in? Sign in and experience the future of real estate firsthand. If you have any questions or need assistance, feel free to reach out. We’re here for you!
    </p>

    <p style="font-size: 16px; color: #555;">
      Cheers to a successful real estate journey with GIDILLO! 🏠
    </p>

    <h3 style="color: #2C3E50; font-size: 20px;">Warm Regards</h3>
    <p style="font-size: 16px; color: #555;">Seyi Boroffice</p>
    <p style="font-size: 16px; color: #555;">CEO Gidillo</p>

    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
      <h2 style="color: #2C3E50; font-size: 20px;">Need help?</h2>
      <p style="font-size: 16px; color: #555;">If you have any questions, please contact us by email at info@gidillo.com.</p>
    </div>

    <div style="margin-top: 20px; font-size: 14px; color: #999; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background-color:#F3F4F6; padding:40px">
     <div style="background-image: url('https://firebasestorage.googleapis.com/v0/b/gidillo.appspot.com/o/gidillo%2Flogo%20(1).webp?alt=media&token=c9420c6a-01ed-4d30-9475-73494953c45a'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 100px; height: 100px;">
</div>
      <p>You’re receiving this email because you’re a valued member of our community.</p>
    </div>
  </div>
</body>
      `;
    case 'otp':
      return `
      <body style="font-family: Roboto, Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333; line-height: 1.6;">

      <div style="background-image: url('https://firebasestorage.googleapis.com/v0/b/gidillo.appspot.com/o/gidillo%2Flogo%20(1).webp?alt=media&token=c9420c6a-01ed-4d30-9475-73494953c45a'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 100px; height: 100px;">
</div>


  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #2C3E50; font-size: 24px;">Hi, ${otherData.name}!</h2>

    <p style="font-size: 16px; color: #555;">
    Welcome to Gidillo! 🎉 We’re excited to have you on board.
    </p>
    <p style="font-size: 16px; color: #555;">
      To complete your registration, please verify your email address by entering the One-Time Password (OTP) provided below:
    </p>

<h2 style="color: #2C3E50; font-size: 24px;">${otherData.code}</h2>

    <p style="font-size: 16px; color: #555;">This OTP is valid for the next 10 minutes. If you did not request this, please ignore this email.</p>
   

    <p style="font-size: 16px; color: #555;">
     If you have any questions or need assistance, feel free to reach out to our support team at info@gidillo.com.
    </p>

    <p style="font-size: 16px; color: #555;">
 Thank you for joining us!
    </p>

    <p style="font-size: 16px; color: #555;">Best Regards</p>
    <p style="font-size: 16px; color: #555;">Gidillo Team</p>

    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
      <h2 style="color: #2C3E50; font-size: 20px;">Need help?</h2>
      <p style="font-size: 16px; color: #555;">If you have any questions, please contact us by email at {{support_email}}.</p>
    </div>

    <div style="margin-top: 20px; font-size: 14px; color: #999; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background-color:#F3F4F6; padding:40px">
      <p>You’re receiving this email because you’re a valued member of our community.</p>
    </div>
  </div>
</body>
      `;
    case 'forgot':
      return `
      <body style="font-family: Roboto, Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333; line-height: 1.6;">

      <div style="background-image: url('https://firebasestorage.googleapis.com/v0/b/gidillo.appspot.com/o/gidillo%2Flogo%20(1).webp?alt=media&token=c9420c6a-01ed-4d30-9475-73494953c45a'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 100px; height: 100px;">
</div>


  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #2C3E50; font-size: 24px;">Hi, ${otherData.name}!</h2>

    <p style="font-size: 16px; color: #555;">
    You recently requested to reset your password for your Gidillo account. To complete the process, please use the following one-time verification code (OTP):
    </p>
 

<h2 style="color: #2C3E50; font-size: 24px;">${otherData.code}</h2>

    <p style="font-size: 16px; color: #555;">Please enter this code on the password reset page within the next 30 minutes. If you didn’t request a password reset, you can safely ignore this email.</p>
   

    <p style="font-size: 16px; color: #555;">
     If you have any questions or need assistance, feel free to reach out to our support team at info@gidillo.com.
    </p>

    <p style="font-size: 16px; color: #555;">
 Thank you for joining us!
    </p>

    <p style="font-size: 16px; color: #555;">Best Regards</p>
    <p style="font-size: 16px; color: #555;">Gidillo Team</p>

    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
      <h2 style="color: #2C3E50; font-size: 20px;">Need help?</h2>
      <p style="font-size: 16px; color: #555;">If you have any questions, please contact us by email at {{support_email}}.</p>
    </div>

    <div style="margin-top: 20px; font-size: 14px; color: #999; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background-color:#F3F4F6; padding:40px">
      <p>You’re receiving this email because you’re a valued member of our community.</p>
    </div>
  </div>
</body>
      `;
    case 'payment-payee':
      return `
      <body style="font-family: Roboto, Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333; line-height: 1.6;">

      <div style="background-image: url('https://firebasestorage.googleapis.com/v0/b/gidillo.appspot.com/o/gidillo%2Flogo%20(1).webp?alt=media&token=c9420c6a-01ed-4d30-9475-73494953c45a'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 100px; height: 100px;">
</div>


  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #2C3E50; font-size: 24px;">Hi, ${otherData.name}!</h2>

    <p style="font-size: 16px; color: #555;">
    Thank you for your payment of <strong>₦${formatAsMoney(otherData.amount)}</strong> for the property <strong>${otherData.propertyName}</strong>. We have successfully received your payment.
    </p>
 

<ul style="font-size: 16px; color: #555; padding-left: 20px;">
      <li><strong>Transaction ID:</strong> ${otherData.transactionId}</li>
      <li><strong>Property Name:</strong> ${otherData.propertyName}</li>
      <li><strong>Property Address:</strong> ${otherData.propertyAddress}</li>
      <li><strong>Property Link:</strong> ${otherData.propertyUrl}</li>
    </ul>

    <p style="font-size: 16px; color: #555;">
     We appreciate your prompt payment and look forward to assisting you further. 
    </p>
   

    <p style="font-size: 16px; color: #555;">
     If you have any questions or need assistance, feel free to reach out to our support team at info@gidillo.com.
    </p>


    <p style="font-size: 16px; color: #555;">Best Regards</p>
    <p style="font-size: 16px; color: #555;">Gidillo Team</p>

    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
      <h2 style="color: #2C3E50; font-size: 20px;">Need help?</h2>
      <p style="font-size: 16px; color: #555;">If you have any questions, please contact us by email at {{support_email}}.</p>
    </div>

    <div style="margin-top: 20px; font-size: 14px; color: #999; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background-color:#F3F4F6; padding:40px">
      <p>You’re receiving this email because you’re a valued member of our community.</p>
    </div>
  </div>
</body>
      `;
    case 'payment-pm':
      return `
      <body style="font-family: Roboto, Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333; line-height: 1.6;">

      <div style="background-image: url('https://firebasestorage.googleapis.com/v0/b/gidillo.appspot.com/o/gidillo%2Flogo%20(1).webp?alt=media&token=c9420c6a-01ed-4d30-9475-73494953c45a'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 100px; height: 100px;">
</div>


  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #2C3E50; font-size: 24px;">Hi, ${otherData.pmName}!</h2>

    <p style="font-size: 16px; color: #555;">
    We are pleased to inform you that a payment of <strong>₦${formatAsMoney(otherData.amount)}</strong> has been made by <strong>${otherData.buyer}</strong> for the property <strong>${otherData.propertyName}</strong>.
    </p>
 <p style="font-size: 16px; color: #555;"><strong>Transaction Details:</strong></p>

<ul style="font-size: 16px; color: #555; padding-left: 20px;">
      <li><strong>Payee Name:</strong> ${otherData.buyer}</li>
                <li><strong>Transaction ID:</strong> ${otherData.transactionId}</li>
              <li><strong>Property Name:</strong> ${otherData.propertyName}</li>
              <li><strong>Property Address:</strong> ${otherData.propertyAddress}</li>
              <li><strong>Property Link:</strong> ${otherData.propertyUrl}</li>
    </ul>

    <p style="font-size: 16px; color: #555;">
     Please update your records accordingly.
    </p>
   

    <p style="font-size: 16px; color: #555;">
     If you have any questions or need assistance, feel free to reach out to our support team at info@gidillo.com.
    </p>


    <p style="font-size: 16px; color: #555;">Best Regards</p>
    <p style="font-size: 16px; color: #555;">Gidillo Team</p>

    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
      <h2 style="color: #2C3E50; font-size: 20px;">Need help?</h2>
      <p style="font-size: 16px; color: #555;">If you have any questions, please contact us by email at {{support_email}}.</p>
    </div>

    <div style="margin-top: 20px; font-size: 14px; color: #999; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background-color:#F3F4F6; padding:40px">
      <p>You’re receiving this email because you’re a valued member of our community.</p>
    </div>
  </div>
</body>
      `;
    case 'payment-admin':
      return `
        <body style="font-family: Roboto, Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333; line-height: 1.6;">
  
        <div style="background-image: url('https://firebasestorage.googleapis.com/v0/b/gidillo.appspot.com/o/gidillo%2Flogo%20(1).webp?alt=media&token=c9420c6a-01ed-4d30-9475-73494953c45a'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 100px; height: 100px;">
  </div>
  
  
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
      <h2 style="color: #2C3E50; font-size: 24px;">Hi, ${otherData.admin}!</h2>
  
      <p style="font-size: 16px; color: #555;">A new payment has been processed for the property <strong>${otherData.propertyName}</strong>.</p>
   <p style="font-size: 16px; color: #555;"><strong>Transaction Details:</strong></p>
  
  <ul style="font-size: 16px; color: #555; padding-left: 20px;">
        <li><strong>Payee/Buyer Name:</strong> ${otherData.buyer}</li>
                <li><strong>Transaction ID:</strong> ${otherData.transactionId}</li>
              <li><strong>Property Name:</strong> ${otherData.propertyName}</li>
              <li><strong>Property Address:</strong> ${otherData.propertyAddress}</li>
              <li><strong>Property Link:</strong> ${otherData.propertyUrl}</li>
              <li><strong>Property Manager:</strong>${otherData.pmName} </li>
      </ul>
  
      <p style="font-size: 16px; color: #555;">
       Please review and confirm the transaction.
      </p>
     

  
  
      <p style="font-size: 16px; color: #555;">Best Regards</p>
      <p style="font-size: 16px; color: #555;">Gidillo Team</p>
  
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
        <h2 style="color: #2C3E50; font-size: 20px;">Need help?</h2>
        <p style="font-size: 16px; color: #555;">If you have any questions, please contact us by email at {{support_email}}.</p>
      </div>
  
      <div style="margin-top: 20px; font-size: 14px; color: #999; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background-color:#F3F4F6; padding:40px">
        <p>You’re receiving this email because you’re a valued member of our community.</p>
      </div>
    </div>
  </body>
        `;
    case 'payment-plan':
      return `<body style="font-family: Roboto, Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333; line-height: 1.6;">
  
        <div style="background-image: url('https://firebasestorage.googleapis.com/v0/b/gidillo.appspot.com/o/gidillo%2Flogo%20(1).webp?alt=media&token=c9420c6a-01ed-4d30-9475-73494953c45a'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 100px; height: 100px;">
  </div>
  
  
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
      <h2 style="color: #2C3E50; font-size: 24px;">Hi, ${otherData.name}!</h2>
  
      <p style="font-size: 16px; color: #555;">Thank you for subscribing to Gidillo! We are thrilled to have you as a valued member of our community. Below are the details of your subscription:</p>

  <ul style="font-size: 16px; color: #555; padding-left: 20px;">
       <li><strong>Subscription Plan:</strong> ${otherData.managementType}</li>
        <li><strong>Subscription Amount:</strong> ${otherData.amount}</li>
        <li><strong>Subscription renewal:</strong> ${otherData.paymentPlan}</li>

        <li><strong>Payee/Buyer Name:</strong> ${otherData.buyer}</li>
                <li><strong>Transaction ID:</strong> ${otherData.transactionId}</li>
              <li><strong>Property Name:</strong> ${otherData.propertyName}</li>
              <li><strong>Property Address:</strong> ${otherData.propertyAddress}</li>
              <li><strong>Property Link:</strong> ${otherData.propertyUrl}</li>
              <li><strong>Property Manager:</strong>${otherData.pmName} </li>
      </ul>
  
      <p style="font-size: 16px; color: #555;">
       We appreciate your support and are committed to providing you with the best service possible.
      </p>
     
  
      <p style="font-size: 16px; color: #555;">
       If you have any questions or need assistance, feel free to reach out to our support team at info@gidillo.com.
      </p>
  <p style="font-size: 16px; color: #555;">
       Thank you once again for choosing Gidillo. We look forward to serving you!
      </p>
  
      <p style="font-size: 16px; color: #555;">Best Regards</p>
      <p style="font-size: 16px; color: #555;">Gidillo Team</p>
  
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
        <h2 style="color: #2C3E50; font-size: 20px;">Need help?</h2>
        <p style="font-size: 16px; color: #555;">If you have any questions, please contact us by email at {{support_email}}.</p>
      </div>
  
      <div style="margin-top: 20px; font-size: 14px; color: #999; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background-color:#F3F4F6; padding:40px">
        <p>You’re receiving this email because you’re a valued member of our community.</p>
      </div>
    </div>
  </body>
        `;
    case 'payment-subscription-admin':
      return `
            <body style="font-family: Roboto, Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333; line-height: 1.6;">
      
            <div style="background-image: url('https://firebasestorage.googleapis.com/v0/b/gidillo.appspot.com/o/gidillo%2Flogo%20(1).webp?alt=media&token=c9420c6a-01ed-4d30-9475-73494953c45a'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 100px; height: 100px;">
      </div>
      
      
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #2C3E50; font-size: 24px;">Hi, ${otherData.admin}!</h2>
      
          <p style="font-size: 16px; color: #555;">I hope this message finds you well.I am writing to inform you that [User’s Name] has successfully submitted their payment. Below are the details:</p>
      
      <ul style="font-size: 16px; color: #555; padding-left: 20px;">
            <li><strong>Property Manager:</strong>${otherData.pmName} </li>
                    <li><strong>Amount:</strong> ${otherData.amount}</li>
                  <li><strong>TransactionId</strong> ${otherData.transactionId}</li>
                  
          </ul>
      
          <p style="font-size: 16px; color: #555;">
           Please confirm receipt of this payment and update the necessary records accordingly.

Thank you for your attention to this matter.

          </p>
         
      
      
      
          <p style="font-size: 16px; color: #555;">Best Regards</p>
          <p style="font-size: 16px; color: #555;">Gidillo Team</p>
      
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
            <h2 style="color: #2C3E50; font-size: 20px;">Need help?</h2>
            <p style="font-size: 16px; color: #555;">If you have any questions, please contact us by email at {{support_email}}.</p>
          </div>
      
          <div style="margin-top: 20px; font-size: 14px; color: #999; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background-color:#F3F4F6; padding:40px">
            <p>You’re receiving this email because you’re a valued member of our community.</p>
          </div>
        </div>
      </body>
            `;
    default:
      throw new Error(`Invalid template type: ${template}`);
  }
};
