export const certificates = [
  {
    title: "Introduction to Web Development",
    issuedBy: "EDX",
    from: "IBM",
    link: "https://courses.edx.org/certificates/8c6839bc8e4240a2a59b3ec2cedb0180",
  },
  {
    title: "Introduction to Linux",
    issuedBy: "EDX",
    from: "IBM",
    link: "https://courses.edx.org/certificates/e5034ac1683444a885d05c8bfe051a3f",
  },
  {
    title: "Meta Back-End Developer",
    issuedBy: "Coursera",
    from: "Meta",
    link: "https://www.coursera.org/account/accomplishments/specialization/ZHWRF7MG4VDG",
  },
  {
    title: "Introduction to Cloud Computing",
    issuedBy: "EDX",
    from: "IBM",
    link: "https://courses.edx.org/certificates/1dfc8f25fa8f4a0b82a788ad76307c21",
  },
  {
    title: "Rust Programming",
    issuedBy: "Coursera",
    from: "Meta",
    link: "https://www.coursera.org/account/accomplishments/specialization/KLANCTJBOT8F",
  },
];

// Function to get themed colors for each certificate
export const getCertificateTheme = (issuer: string) => {
  switch (issuer.toLowerCase()) {
    case "meta":
      return {
        bgColor: "bg-blue-600",
        hoverBgColor: "hover:bg-blue-700",
        borderColor: "border-blue-500/20",
        hoverBorderColor: "hover:border-blue-400/30",
      };
    case "ibm":
      return {
        bgColor: "bg-sky-600",
        hoverBgColor: "hover:bg-sky-700",
        borderColor: "border-sky-500/20",
        hoverBorderColor: "hover:border-sky-400/30",
      };
    case "duke university":
      return {
        bgColor: "bg-orange-600",
        hoverBgColor: "hover:bg-orange-700",
        borderColor: "border-orange-500/20",
        hoverBorderColor: "hover:border-orange-400/30",
      };
    case "linuxfoundationx":
      return {
        bgColor: "bg-yellow-600",
        hoverBgColor: "hover:bg-yellow-700",
        borderColor: "border-yellow-500/20",
        hoverBorderColor: "hover:border-yellow-400/30",
      };
    default:
      return {
        bgColor: "bg-gray-600",
        hoverBgColor: "hover:bg-gray-700",
        borderColor: "border-gray-500/20",
        hoverBorderColor: "hover:border-gray-400/30",
      };
  }
};
