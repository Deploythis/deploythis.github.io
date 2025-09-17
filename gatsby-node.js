exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      type: String
      title: String
      subtitle: String
      name: String
      role: String
      experienceYears: String
      experience: [Experience]
      bio: String
      description: String
      vision: String
      skills: Skills
      email: String
      location: String
      social: Social
      message: String
      updated: String
      education: [Education]
      awards: Awards
      seo: SEO
    }

    type Experience {
      title: String
      company: String
      period: String
      description: [String]
    }

    type Skills {
      technical: [String]
    }

    type Social {
      linkedin: SocialLink
      bluesky: SocialLink
    }

    type SocialLink {
      url: String
      label: String
    }

    type Education {
      degree: String
      institution: String
      year: String
    }

    type Awards {
      recognition: String
    }

    type SEO {
      title: String
      description: String
      keywords: [String]
      image: String
    }
  `

  createTypes(typeDefs)
}