module.exports = {
    async afterCreate(event) {
      const { result } = event;
  
      try {
        await strapi
          .plugin("email")
          .service("email")
          .send({
            to: "noreply@theglobalproperty.co.uk",
            from: "noreply@theglobalproperty.co.uk",
            subject: "New Inquiry From ",
            text: `You have new inqury from healtclinicturkiye.com. Details: Name: ${result.name}, email: ${result.email}, phone: ${result.phoneNumber}, message: ${result.message}`,
          });
      } catch (err) {
        console.log(err);
      }
    },
  };