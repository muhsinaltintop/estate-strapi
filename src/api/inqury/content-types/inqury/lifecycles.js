module.exports = {
    async afterCreate(event) {
      const { result } = event;
  
      try {
        await strapi
          .plugin("email")
          .service("email")
          .send({
            to: "property@theglobalproperty.co.uk",
            from: "noreply@theglobalproperty.co.uk",
            subject: "New Inquiry From ",
            html: `<h1>New Inquiry</h1>
              <p>You have a new inquiry from <strong>theglobalproperty.co.uk</strong>.</p>
              <h2>Details:</h2>
              <p><strong>Name:</strong> ${result.name}</p>
              <p><strong>Email:</strong> ${result.email}</p>
              <p><strong>Phone:</strong> ${result.phoneNumber}</p>
              <p><strong>Message:</strong> ${result.message}</p>`,
            });
          } catch (err) {
        console.log(err);
      }
    },
  };