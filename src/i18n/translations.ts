export type Language = "en" | "hi" | "mr";

export interface Translation {
  nav: {
    home: string;
    about: string;
    features: string;
    howItWorks: string;
    contact: string;
    login: string;
    register: string;
  };
  header: {
    ministryLine1: string;
    ministryLine2: string;
    ministryLine3: string;
  };
  hero: {
    pill: string;
    subheadingLine1: string;
    subheadingLine2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    assessSkills: string;
    identifyGaps: string;
    personalizedLearning: string;
    aiQuizzes: string;
  };
  stats: {
    officersLabel: string;
    resourcesLabel: string;
    domainsLabel: string;
    aiValue: string;
    aiLabel: string;
  };
  collaboration: {
    heading: string;
    mospiName: string;
    mospiDesc1: string;
    mospiDesc2: string;
    igotName: string;
    nsstaName: string;
    nsstaDesc: string;
  };
  footer: {
    about: string;
    features: string;
    howItWorks: string;
    contact: string;
    privacy: string;
    terms: string;
    statement: string;
  };
  modals: {
    loginTitle: string;
    loginSubtitle: string;
    registerTitle: string;
    registerSubtitle: string;
    emailLabel: string;
    passwordLabel: string;
    nameLabel: string;
    userType: string;
    userTypeOfficer: string;
    userTypeAdmin: string;
    userTypeNew: string;
    submitLogin: string;
    submitRegister: string;
    close: string;
    switchToRegister: string;
    switchToLogin: string;
  };
  breadcrumb: {
    home: string;
  };
  loginGateway: {
    welcome: string;
    subtitle: string;
    backToHome: string;
    backToRoleSelection: string;
    officerTitle: string;
    officerDescription: string;
    officerFeatures: [string, string, string, string];
    officerCta: string;
    adminTitle: string;
    adminDescription: string;
    adminFeatures: [string, string, string, string];
    adminCta: string;
    infoSecureTitle: string;
    infoSecureText: string;
    infoOfficerTitle: string;
    infoOfficerText: string;
    infoIndiaTitle: string;
    infoIndiaText: string;
    officerFormTitle: string;
    officerFormSubtitle: string;
    adminFormTitle: string;
    adminFormSubtitle: string;
    adminIdLabel: string;
    forgotPassword: string;
    newUserRegister: string;
    breadcrumbLogin: string;
    breadcrumbOfficer: string;
    breadcrumbAdmin: string;
    assessTitle: string;
    assessText: string;
    learnTitle: string;
    learnText: string;
    growTitle: string;
    growText: string;
    officerEmailLabel: string;
    officerEmailPlaceholder: string;
    passwordLabelRequired: string;
    passwordPlaceholder: string;
    adminEmailPlaceholder: string;
    rememberMe: string;
    newUserQuestion: string;
    registerAsOfficer: string;
    registerAsAdmin: string;
    secureOfficerTitle: string;
    secureOfficerText: string;
    secureAdminTitle: string;
    secureAdminText: string;
  };
  registerGateway: {
    heading: string;
    subtitle: string;
    officerTitle: string;
    officerDescription: string;
    officerFeatures: [string, string, string, string];
    officerCta: string;
    adminTitle: string;
    adminDescription: string;
    adminFeatures: [string, string, string, string];
    adminCta: string;
    alreadyHaveAccount: string;
    loginLink: string;
    backToRegisterSelection: string;
  };
  registerForm: {
    officerFormTitle: string;
    officerFormSubtitle: string;
    adminFormTitle: string;
    adminFormSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    officerIdLabel: string;
    officerIdPlaceholder: string;
    adminIdLabel: string;
    adminIdPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    mobileLabel: string;
    mobilePlaceholder: string;
    officerDepartmentLabel: string;
    adminDepartmentLabel: string;
    departmentPlaceholder: string;
    designationLabel: string;
    designationPlaceholder: string;
    stateLabel: string;
    statePlaceholder: string;
    districtLabel: string;
    districtPlaceholder: string;
    confirmPasswordLabel: string;
    confirmPasswordPlaceholder: string;
    termsText: string;
    registerButton: string;
    successTitle: string;
    successText: string;
    backToHomeAfterSuccess: string;
  };
  validation: {
    requiredFields: string;
    passwordMismatch: string;
    termsRequired: string;
    invalidEmail: string;
    invalidMobile: string;
    otpIncomplete: string;
    otpIncorrect: string;
  };
  sidePanel: {
    words: [string, string, string, string];
    headline: string;
    assessTitle: string;
    assessText: string;
    learnTitle: string;
    learnText: string;
    growTitle: string;
    growText: string;
    manageTitle: string;
    manageText: string;
    monitorTitle: string;
    monitorText: string;
    strengthenTitle: string;
    strengthenText: string;
  };
  officerWizard: {
    heading: string;
    subtitle: string;
    steps: [string, string, string, string];
    backButton: string;
    nextButton: string;
    step1Heading: string;
    step1Subtitle: string;
    officialEmailLabel: string;
    officialEmailPlaceholder: string;
    officerMobilePlaceholder: string;
    officerIdLabel: string;
    officerIdPlaceholder: string;
    departmentLabel: string;
    departmentPlaceholder: string;
    designationLabel: string;
    designationPlaceholder: string;
    stateLabel: string;
    statePlaceholder: string;
    languageLabel: string;
    step2Heading: string;
    step2Subtitle: string;
    experienceLabel: string;
    experiencePlaceholder: string;
    roleLabel: string;
    rolePlaceholder: string;
    domainLabel: string;
    domainPlaceholder: string;
    skillsHeading: string;
    skillsSubtitle: string;
    skillOptions: [string, string, string, string, string, string, string, string, string, string, string];
    responsibilitiesLabel: string;
    responsibilitiesPlaceholder: string;
    step3Heading: string;
    step3Subtitle: string;
    createAccountButton: string;
    passwordRequirements: [string, string, string, string, string];
    passwordStrengthLabel: string;
    step4Heading: string;
    step4Text: string;
    changeLink: string;
    resendQuestion: string;
    resendButton: string;
    otpInfo: string;
    verifyButton: string;
    successHeading: string;
    successText: string;
    confirmationSentTo: string;
    checkInboxText: string;
    goToLoginButton: string;
    goToDashboardButton: string;
  };
  adminWizard: {
    heading: string;
    subtitle: string;
    steps: [string, string, string, string];
    step1Heading: string;
    step1Subtitle: string;
    employeeIdLabel: string;
    employeeIdPlaceholder: string;
    officialContactLabel: string;
    officialContactPlaceholder: string;
    departmentLabel: string;
    departmentPlaceholder: string;
    designationLabel: string;
    designationPlaceholder: string;
    step2Heading: string;
    step2Subtitle: string;
    adminRoleLabel: string;
    adminRolePlaceholder: string;
    yearsOfServiceLabel: string;
    yearsOfServicePlaceholder: string;
    areaOfResponsibilityLabel: string;
    areaOfResponsibilityPlaceholder: string;
    accessTypeLabel: string;
    accessTypePlaceholder: string;
    accessTypeOptions: [string, string, string, string];
    authDetailsLabel: string;
    authDetailsPlaceholder: string;
    authDetailsMax: number;
    reasonLabel: string;
    reasonPlaceholder: string;
    reasonMax: number;
    step3Heading: string;
    step3Subtitle: string;
    step4Heading: string;
    step4Description: string;
    step4Text: string;
    verifyButton: string;
    requestSubmittedHeading: string;
    requestSubmittedText: string;
    pendingApprovalLabel: string;
    goToLoginButton: string;
    goToDashboardButton: string;
  };
  aboutPage: {
    heroTitle: string;
    heroDescription: string;
    overviewHeading: string;
    overviewText: string;
    objectivesHeading: string;
    objectives: [string, string, string, string];
    cardWhoTitle: string;
    cardWhoText: string;
    cardWhatTitle: string;
    cardWhatText: string;
    cardWhyTitle: string;
    cardWhyText: string;
    cardHowTitle: string;
    cardHowText: string;
    initiativeHeading: string;
    initiativeText: string;
  };
  featuresPage: {
    heroTitle: string;
    heroSubtitle: string;
    cards: {
      title: string;
      description: string;
      bullets: [string, string, string];
    }[];
    integratedHeading1: string;
    integratedHeading2: string;
    process: [string, string, string, string, string, string];
  };
  howItWorksPage: {
    heroTitle: string;
    heroSubtitle: string;
    quickSteps: { title: string; desc: string }[];
    stepByStepHeading: string;
    cycleHeading: string;
    cycleSteps: [string, string, string];
    cycleFooter: string;
  };
  contactPage: {
    heroTitle: string;
    heroDescription: string;
    emailTitle: string;
    emailDesc: string;
    emailValue: string;
    helpdeskTitle: string;
    helpdeskDesc: string;
    helpdeskHours: string;
    helpdeskValue: string;
    addressTitle: string;
    addressLine1: string;
    addressLine2: string;
    hoursTitle: string;
    hoursLine1: string;
    hoursLine2: string;
    hoursLine3: string;
    formHeading: string;
    fieldName: string;
    fieldEmail: string;
    fieldUserType: string;
    fieldSubject: string;
    fieldMessage: string;
    submitButton: string;
    faqHeading: string;
    faqs: { q: string; a: string }[];
    officeHeading: string;
    officeText: string;
  };
  dashboard: {
    officer: {
      welcomeBack: string;
      overallScoreLabel: string;
      startAnalysisButton: string;
      competencyOverviewHeading: string;
      skillGapsHeading: string;
      recommendationsHeading: string;
      learningPathHeading: string;
      courseProgressHeading: string;
      assessmentsHeading: string;
      activityHeading: string;
      quickLinksHeading: string;
      startAssessmentButton: string;
      modalTitle: string;
      modalSubtitle: string;
      modalNextButton: string;
      modalFinishButton: string;
      modalResultHeading: string;
      modalResultText: string;
      modalViewGapsButton: string;
      overviewTabLabel: string;
      profileTabLabel: string;
      assessmentsTabLabel: string;
      resourcesTabLabel: string;
      learningHoursLabel: string;
      overallProgressLabel: string;
      aiAssistantHeading: string;
      aiAssistantAccessText: string;
      aiAssistantTitle: string;
      aiAssistantPlaceholder: string;
      aiAssistantGreeting: string;
      aiAssistantLauncherLabel: string;
      designationLabel: string;
      departmentLabel: string;
      jobRoleLabel: string;
      currentAssignmentLabel: string;
      qualificationsLabel: string;
      experienceLabel: string;
      previousTrainingLabel: string;
      takeAssessmentButton: string;
      generateQuizButton: string;
      aiGeneratedQuizTitle: string;
      quizCheckAnswerButton: string;
      quizNextButton: string;
      quizFinishButton: string;
      quizCorrectFeedback: string;
      quizIncorrectFeedback: string;
      quizScoreLabel: string;
      quizDoneButton: string;
      quizGeneratedBadge: string;
      catalogueHeading: string;
      skillGapsTabLabel: string;
      learningTabLabel: string;
      progressTabLabel: string;
      settingsTabLabel: string;
      statusCompleted: string;
      statusInProgress: string;
      statusUpcoming: string;
      severityHigh: string;
      severityMedium: string;
      severityLow: string;
      hoursUnit: string;
      qaSkillGapAnalysis: string;
      qaSkillGapsRecommendations: string;
      qaLearningResources: string;
      qaAssessmentCentre: string;
      qaMyProgress: string;
      aiQuizCardSubtitle: string;
      aiQuizNoneYetText: string;
      aiQuizPublishedCountText: string;
      recommendationsConnectText: string;
      progressIntroText: string;
      settingsSectionProfile: string;
      settingsSectionSecurity: string;
      settingsChangePasswordLabel: string;
      settingsChangePasswordAction: string;
      settingsSectionLanguage: string;
      settingsSectionNotifications: string;
      settingsEmailNotifications: string;
      settingsAssessmentReminders: string;
      settingsTrainingAlerts: string;
      settingsSkillGapAlerts: string;
      settingsSectionAccessibility: string;
      settingsHighContrast: string;
      settingsFontSize: string;
      settingsScreenReaderHints: string;
      settingsKeyboardNavHints: string;
      settingsSectionPrivacy: string;
      settingsDataSharingConsent: string;
      settingsSectionHelp: string;
      settingsHelpCenter: string;
      settingsUserGuide: string;
      settingsFaqs: string;
      settingsContactSupport: string;
      settingsReportIssue: string;
      settingsFeedback: string;
      settingsSectionAbout: string;
      settingsAboutPlatform: string;
      settingsInitiativeInfo: string;
      settingsCopyright: string;
      settingsViewAction: string;
      settingsSaved: string;
      settingsLogoutButton: string;
      assistantGapsIntro: string;
      assistantExplainGap: string;
      assistantExplainOk: string;
      assistantRecommendations: string;
      assistantProgress: string;
      assistantAssessmentsPending: string;
      assistantAssessmentsNone: string;
      assistantFallback: string;
      assistantTyping: string;
      chipSkillGaps: string;
      chipWhyPython: string;
      chipRecommendedCourses: string;
      chipProgress: string;
      chipPendingAssessment: string;
      journeyStepCompetency: string;
      journeyStepSkillGap: string;
      journeyStepLearning: string;
      journeyStepAssessment: string;
      journeyStepProgress: string;
      pipelineHeading: string;
      pipelineCompetency: string;
      pipelineSkillGap: string;
      pipelineRecommendation: string;
      wizStepSelectContent: string;
      wizStepConfigure: string;
      wizStepGenerating: string;
      wizStepPreview: string;
      wizStepPublished: string;
      wizContentLabel: string;
      wizCountLabel: string;
      wizDifficultyLabel: string;
      wizGenerateButton: string;
      wizGeneratingText: string;
      wizPreviewHint: string;
      wizRemoveButton: string;
      wizBackButton: string;
      wizPublishButton: string;
      wizPublishedText: string;
      wizDoneButton: string;
    };
    admin: {
      welcomeHeading: string;
      totalOfficersLabel: string;
      totalDepartmentsLabel: string;
      officersAssessedLabel: string;
      totalCoursesLabel: string;
      competencyOverviewHeading: string;
      skillGapAnalyticsHeading: string;
      departmentPerformanceHeading: string;
      activityHeading: string;
      quickActionsHeading: string;
      officersHeading: string;
      pendingHeading: string;
      departmentsHeading: string;
      coursesHeading: string;
      resourcesHeading: string;
      recommendationsHeading: string;
      assessmentsHeading: string;
      questionBankHeading: string;
      reportsHeading: string;
      profileHeading: string;
      settingsHeading: string;
      trainingEffectivenessHeading: string;
      emergingSkillsHeading: string;
      tpacProgramsHeading: string;
      learningActivityHeading: string;
      predictiveInsightsHeading: string;
      journeyStepWorkforce: string;
      journeyStepSkillGaps: string;
      journeyStepTrainingEffectiveness: string;
      journeyStepEmergingSkills: string;
      journeyStepCapacityPlanning: string;
    };
    sidebar: {
      dashboard: string;
      officers: string;
      pending: string;
      departments: string;
      competencyAnalytics: string;
      skillGapAnalytics: string;
      courses: string;
      resources: string;
      recommendations: string;
      assessments: string;
      questionBank: string;
      reports: string;
      profile: string;
      settings: string;
      logout: string;
      trainingEffectiveness: string;
      emergingSkills: string;
      tpacPrograms: string;
      assessmentsGroup: string;
      questionBankGroup: string;
      aiAssessmentGenerator: string;
      publishedAssessments: string;
      assessmentResults: string;
      generatedQuestions: string;
    };
    table: {
      name: string;
      id: string;
      department: string;
      designation: string;
      status: string;
      requestedRole: string;
      date: string;
      officers: string;
      avgScore: string;
      title: string;
      category: string;
      enrolled: string;
      duration: string;
      type: string;
      domain: string;
      officer: string;
      recommended: string;
      attempts: string;
      difficulty: string;
      generatedOn: string;
      question: string;
      completionRate: string;
      scoreImprovement: string;
      demandTrend: string;
      cohortSize: string;
      period: string;
      hoursLogged: string;
      source: string;
      completions: string;
    };
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      features: "Features",
      howItWorks: "How it Works",
      contact: "Contact",
      login: "Login",
      register: "Register",
    },
    header: {
      ministryLine1: "Government of India",
      ministryLine2: "Ministry of Statistics &",
      ministryLine3: "Programme Implementation",
    },
    hero: {
      pill: "Learn  •  Assess  •  Grow    |    For a Stronger Statistical India",
      subheadingLine1: "AI-Powered Competency Intelligence",
      subheadingLine2: "& Adaptive Learning Platform",
      description:
        "Identify your skill gaps, discover personalized learning pathways, and strengthen your competencies through AI-powered assessment.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Register",
    },
    features: {
      assessSkills: "Assess Your Skills",
      identifyGaps: "Identify Skill Gaps",
      personalizedLearning: "Get Personalized Learning",
      aiQuizzes: "Take AI-Powered Quizzes",
    },
    stats: {
      officersLabel: "Statistical Officers",
      resourcesLabel: "Learning Resources",
      domainsLabel: "Competency Domains",
      aiValue: "AI-Powered",
      aiLabel: "Assessments & Recommendations",
    },
    collaboration: {
      heading: "In Collaboration With",
      mospiName: "MoSPI",
      mospiDesc1: "Ministry of Statistics &",
      mospiDesc2: "Programme Implementation, Government of India",
      igotName: "iGOT Karmayogi",
      nsstaName: "NSSTA",
      nsstaDesc: "National Statistical Systems Training Academy",
    },
    footer: {
      about: "About",
      features: "Features",
      howItWorks: "How it Works",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      statement: "Karmayogi-StatAI | Building a Skilled Statistical India",
    },
    modals: {
      loginTitle: "Login to Karmayogi-StatAI",
      loginSubtitle: "Access your competency dashboard",
      registerTitle: "Create your account",
      registerSubtitle: "Join the statistical competency network",
      emailLabel: "Email / Employee ID",
      passwordLabel: "Password",
      nameLabel: "Full Name",
      userType: "I am a",
      userTypeOfficer: "Statistical Officer",
      userTypeAdmin: "Administrator",
      userTypeNew: "New Officer / User",
      submitLogin: "Login",
      submitRegister: "Create Account",
      close: "Close",
      switchToRegister: "New here? Register",
      switchToLogin: "Already have an account? Login",
    },
    breadcrumb: {
      home: "Home",
    },
    loginGateway: {
      welcome: "Welcome",
      subtitle: "Select how you want to access the platform",
      backToHome: "← Back to Home",
      backToRoleSelection: "← Back to role selection",
      officerTitle: "Statistical Officer",
      officerDescription: "Access personalized learning, assessments and track your competency growth.",
      officerFeatures: [
        "Take AI-powered assessments",
        "Identify skill gaps",
        "Get personalized learning paths",
        "Track your progress",
      ],
      officerCta: "Continue as Statistical Officer →",
      adminTitle: "Administrator",
      adminDescription: "Manage users, assessments, learning resources and platform analytics.",
      adminFeatures: [
        "Manage officer accounts",
        "Create and manage assessments",
        "Manage learning resources",
        "View analytics and reports",
      ],
      adminCta: "Continue as Administrator →",
      infoSecureTitle: "Secure Government Platform",
      infoSecureText: "Your data is safe and protected.",
      infoOfficerTitle: "For Statistical Officers",
      infoOfficerText: "Build skills. Grow professionally.",
      infoIndiaTitle: "Towards a Data-Driven India",
      infoIndiaText: "Strengthening statistical capabilities for a better tomorrow.",
      officerFormTitle: "Statistical Officer Login",
      officerFormSubtitle: "Sign in to access your competency, assessments and personalized learning.",
      adminFormTitle: "Administrator Login",
      adminFormSubtitle: "Sign in to manage competencies, assessments, learning resources, officers and platform analytics.",
      adminIdLabel: "Official Admin ID / Email *",
      forgotPassword: "Forgot Password?",
      newUserRegister: "New user? Register",
      breadcrumbLogin: "Login",
      breadcrumbOfficer: "Statistical Officer",
      breadcrumbAdmin: "Administrator",
      assessTitle: "Assess",
      assessText: "Evaluate your competencies with AI-powered assessments.",
      learnTitle: "Learn",
      learnText: "Get personalized learning resources tailored to your role.",
      growTitle: "Grow",
      growText: "Track your progress and strengthen your impact.",
      officerEmailLabel: "Official Email / Officer ID *",
      officerEmailPlaceholder: "Enter your official email or Officer ID",
      passwordLabelRequired: "Password *",
      passwordPlaceholder: "Enter your password",
      adminEmailPlaceholder: "Enter your administrator ID or email",
      rememberMe: "Remember me",
      newUserQuestion: "New to Karmayogi-StatAI?",
      registerAsOfficer: "Register as Statistical Officer",
      registerAsAdmin: "Register as Administrator",
      secureOfficerTitle: "Secure Government Platform",
      secureOfficerText: "Your credentials and learning data are protected.",
      secureAdminTitle: "Secure Administrator Access",
      secureAdminText: "Authorized personnel only. Administrative access is protected by secure authentication.",
    },
    registerGateway: {
      heading: "Create Your Karmayogi-StatAI Account",
      subtitle: "Select your role to continue.",
      officerTitle: "Statistical Officer",
      officerDescription: "Create an account to assess competencies, identify skill gaps, learn and track your progress.",
      officerFeatures: [
        "Take AI-powered assessments",
        "Get personalized learning paths",
        "Access learning resources",
        "Track your growth",
      ],
      officerCta: "Continue as Statistical Officer →",
      adminTitle: "Administrator",
      adminDescription: "Create an account for authorized personnel to manage the platform, officers, assessments and analytics.",
      adminFeatures: [
        "Manage officer accounts",
        "Create and manage assessments",
        "Manage learning resources",
        "View platform analytics",
      ],
      adminCta: "Continue as Administrator →",
      alreadyHaveAccount: "Already have an account?",
      loginLink: "Login",
      backToRegisterSelection: "← Back to registration selection",
    },
    registerForm: {
      officerFormTitle: "Statistical Officer Registration",
      officerFormSubtitle: "Create your account to start assessing and building your competencies.",
      adminFormTitle: "Administrator Registration",
      adminFormSubtitle: "Create an administrator account to manage the Karmayogi-StatAI platform.",
      fullNameLabel: "Full Name *",
      fullNamePlaceholder: "Enter your full name",
      officerIdLabel: "Employee / Officer ID *",
      officerIdPlaceholder: "Enter your employee or officer ID",
      adminIdLabel: "Administrator ID *",
      adminIdPlaceholder: "Enter your administrator ID",
      emailLabel: "Email Address *",
      emailPlaceholder: "Enter your email address",
      mobileLabel: "Mobile Number *",
      mobilePlaceholder: "Enter your 10-digit mobile number",
      officerDepartmentLabel: "Department *",
      adminDepartmentLabel: "Department / Organization *",
      departmentPlaceholder: "Enter your department",
      designationLabel: "Designation *",
      designationPlaceholder: "Enter your designation",
      stateLabel: "State *",
      statePlaceholder: "Enter your state",
      districtLabel: "District *",
      districtPlaceholder: "Enter your district",
      confirmPasswordLabel: "Confirm Password *",
      confirmPasswordPlaceholder: "Re-enter your password",
      termsText: "I agree to the Terms of Use and Privacy Policy *",
      registerButton: "Register",
      successTitle: "Registration Successful",
      successText: "Your account request has been recorded. You can now sign in once it is approved.",
      backToHomeAfterSuccess: "← Back to Home",
    },
    validation: {
      requiredFields: "Please fill in all required fields.",
      passwordMismatch: "Passwords do not match.",
      termsRequired: "Please accept the Terms of Use and Privacy Policy to continue.",
      invalidEmail: "Please enter a valid email address.",
      invalidMobile: "Please enter a valid 10-digit mobile number.",
      otpIncomplete: "Please enter the complete 6-digit OTP.",
      otpIncorrect: "The OTP you entered is incorrect. Please try again.",
    },
    sidePanel: {
      words: ["Data", "People", "Policy", "Impact"],
      headline: "For a Stronger Statistical India",
      assessTitle: "Assess",
      assessText: "Evaluate your competencies with AI-powered assessments.",
      learnTitle: "Learn",
      learnText: "Get personalized resources tailored to your role.",
      growTitle: "Grow",
      growText: "Track your progress and strengthen your impact.",
      manageTitle: "Manage",
      manageText: "Oversee platform users, assessments and resources.",
      monitorTitle: "Monitor",
      monitorText: "Track competency growth and platform analytics.",
      strengthenTitle: "Strengthen",
      strengthenText: "Enable a skilled and data-driven workforce.",
    },
    officerWizard: {
      heading: "Create Statistical Officer Account",
      subtitle: "Join Karmayogi-StatAI to assess your competencies, identify skill gaps and track your learning journey.",
      steps: ["Basic Information", "Professional Details", "Create Password", "Verification"],
      backButton: "← Back",
      nextButton: "Next →",
      step1Heading: "Basic Information",
      step1Subtitle: "Please provide your basic details to create your account.",
      officialEmailLabel: "Official Email *",
      officialEmailPlaceholder: "Enter your official email",
      officerMobilePlaceholder: "Enter your mobile number",
      officerIdLabel: "Officer ID / Employee ID *",
      officerIdPlaceholder: "Enter your officer ID",
      departmentLabel: "Department / Organization *",
      departmentPlaceholder: "Select department",
      designationLabel: "Designation *",
      designationPlaceholder: "Select designation",
      stateLabel: "State / UT *",
      statePlaceholder: "Select state / UT",
      languageLabel: "Preferred Language *",
      step2Heading: "Professional Details",
      step2Subtitle: "Tell us about your current role and professional experience.",
      experienceLabel: "Years of Experience *",
      experiencePlaceholder: "Select years of experience",
      roleLabel: "Current Role / Function *",
      rolePlaceholder: "Select your current role",
      domainLabel: "Statistical Domain / Area *",
      domainPlaceholder: "Select statistical domain",
      skillsHeading: "Current Skill Areas",
      skillsSubtitle: "Select all skills relevant to your role (you can modify later).",
      skillOptions: [
        "Data Analysis",
        "Statistical Methods",
        "Data Visualization",
        "SQL",
        "Python",
        "R",
        "Machine Learning",
        "Database Management",
        "Survey Methodology",
        "Data Quality",
        "Report Generation",
      ],
      responsibilitiesLabel: "Primary Work Responsibilities",
      responsibilitiesPlaceholder: "Describe your primary work responsibilities",
      step3Heading: "Create Password",
      step3Subtitle: "Create a secure password for your Karmayogi-StatAI account.",
      createAccountButton: "Next →",
      passwordRequirements: [
        "At least 8 characters",
        "One uppercase letter",
        "One lowercase letter",
        "One number",
        "One special character",
      ],
      passwordStrengthLabel: "Password strength",
      step4Heading: "Verify Your Account",
      step4Text: "We've sent a verification code to your registered email.",
      changeLink: "Change",
      resendQuestion: "Didn't receive the OTP?",
      resendButton: "Resend Code",
      otpInfo: "Please check your inbox (and spam folder) for the verification code. This is a mock verification flow for the frontend prototype — no real email has been sent.",
      verifyButton: "Verify & Create Account",
      successHeading: "Account Created Successfully",
      successText: "Your Karmayogi-StatAI account has been created successfully.",
      confirmationSentTo: "A confirmation email has been sent to",
      checkInboxText: "Please check your inbox (and spam folder) for further instructions.",
      goToLoginButton: "Go to Login →",
      goToDashboardButton: "Go to Dashboard →",
    },
    adminWizard: {
      heading: "Create Administrator Account",
      subtitle: "Register as an authorized administrator to manage the Karmayogi-StatAI platform.",
      steps: ["Basic Information", "Professional Details", "Create Password", "Verification"],
      step1Heading: "Basic Information",
      step1Subtitle: "Please provide your official details to request an administrator account.",
      employeeIdLabel: "Official Employee ID *",
      employeeIdPlaceholder: "Enter your official employee ID",
      officialContactLabel: "Official Contact Number *",
      officialContactPlaceholder: "Enter your official contact number",
      departmentLabel: "Department / Organization *",
      departmentPlaceholder: "Enter your department or organization",
      designationLabel: "Designation *",
      designationPlaceholder: "Enter your designation",
      step2Heading: "Professional Details",
      step2Subtitle: "Provide information about your administrative role and responsibilities.",
      adminRoleLabel: "Administrative Role *",
      adminRolePlaceholder: "Select your administrative role",
      yearsOfServiceLabel: "Years of Service *",
      yearsOfServicePlaceholder: "Select years of service",
      areaOfResponsibilityLabel: "Area of Responsibility *",
      areaOfResponsibilityPlaceholder: "Select area of responsibility",
      accessTypeLabel: "Administrator Access Type *",
      accessTypePlaceholder: "Select access type",
      accessTypeOptions: [
        "Platform Administrator",
        "Department Administrator",
        "Assessment Administrator",
        "Learning Resource Administrator",
      ],
      authDetailsLabel: "Authorization / Reference Details *",
      authDetailsPlaceholder: "Enter authorization details or reference from a senior official",
      authDetailsMax: 300,
      reasonLabel: "Reason for Requesting Administrative Access *",
      reasonPlaceholder: "Please describe the purpose for requesting administrator access",
      reasonMax: 500,
      step3Heading: "Create Password",
      step3Subtitle: "Create a secure password for your Karmayogi-StatAI administrator account.",
      step4Heading: "Verify Your Account",
      step4Description: "Verify your official email address to complete your administrator registration.",
      step4Text: "We've sent a verification code to",
      verifyButton: "Verify & Submit Access Request",
      requestSubmittedHeading: "Administrator Access Request Submitted",
      requestSubmittedText: "Your administrator access request has been submitted successfully. It will be reviewed by an authorized administrator.",
      pendingApprovalLabel: "Pending Approval",
      goToLoginButton: "Go to Login →",
      goToDashboardButton: "Go to Dashboard →",
    },
    aboutPage: {
      heroTitle: "About Karmayogi-StatAI",
      heroDescription:
        "Karmayogi-StatAI is an AI-powered competency intelligence and adaptive learning platform developed for the statistical ecosystem under the Ministry of Statistics & Programme Implementation (MoSPI), Government of India.",
      overviewHeading: "Overview",
      overviewText:
        "Karmayogi-StatAI aims to strengthen the capabilities of statistical officers and professionals by providing a structured, data-driven and personalized learning experience. The platform enables users to assess their current skills, identify competency gaps, access curated learning resources, and track their progress through AI-powered assessment and recommendations.",
      objectivesHeading: "Key Objectives",
      objectives: [
        "Strengthen competencies of statistical officers",
        "Enable personalized and adaptive learning",
        "Support continuous professional development",
        "Build a skilled and future-ready statistical ecosystem",
      ],
      cardWhoTitle: "Who Can Use It?",
      cardWhoText:
        "Statistical officers, administrators, and new officers or users across the statistical ecosystem of the Government of India.",
      cardWhatTitle: "What It Does",
      cardWhatText:
        "Assesses competencies, identifies skill gaps, and recommends personalized, AI-powered learning pathways.",
      cardWhyTitle: "Why It Matters",
      cardWhyText:
        "A skilled statistical workforce is essential for accurate data, sound policy-making, and a stronger Digital India.",
      cardHowTitle: "How It Supports",
      cardHowText:
        "Through adaptive quizzes, curated resources, and a progress tracker that guides continuous professional growth.",
      initiativeHeading: "About the Initiative",
      initiativeText:
        "Developed in collaboration with MoSPI, iGOT Karmayogi, and NSSTA, this initiative brings together institutional expertise and modern AI to build a future-ready statistical workforce for a stronger Statistical India.",
    },
    featuresPage: {
      heroTitle: "Platform Features",
      heroSubtitle:
        "A comprehensive set of AI-powered tools to assess, learn, grow and track competencies for a stronger statistical ecosystem.",
      cards: [
        {
          title: "Competency Assessment",
          description:
            "AI-powered assessments to evaluate domain knowledge, analytical skills and role-specific competencies.",
          bullets: ["Role-based assessments", "Adaptive question sets", "Instant performance analysis"],
        },
        {
          title: "AI Skill-Gap Analysis",
          description:
            "Identify precisely where your competencies fall short, mapped against role and domain expectations.",
          bullets: ["Personalized gap analysis", "Domain-wise insights", "Data-driven recommendations"],
        },
        {
          title: "Personalized Learning",
          description:
            "Learning pathways tailored to your role, current skill level and career goals.",
          bullets: ["Customized learning paths", "Curated learning resources", "Self-paced learning"],
        },
        {
          title: "AI-Powered Quizzes",
          description:
            "Reinforce your knowledge with quizzes that adapt to your performance in real time.",
          bullets: ["Topic-wise quizzes", "Adaptive difficulty levels", "Instant feedback and solutions"],
        },
        {
          title: "Progress Tracker",
          description:
            "A visual dashboard that shows exactly how your competencies are growing over time.",
          bullets: ["Visual progress dashboard", "Competency-wise growth", "Badges and achievements"],
        },
        {
          title: "Learning Resources",
          description:
            "A curated library of resources covering statistics, data analytics, GIS and AI/ML.",
          bullets: ["E-learning modules", "Articles, reports and case studies", "Multimedia content"],
        },
        {
          title: "Role-Based Learning Paths",
          description:
            "Learning journeys structured around the specific competencies each role requires.",
          bullets: ["Role-specific competencies", "Structured learning paths", "Relevant assessments"],
        },
        {
          title: "Certification & Recognition",
          description:
            "Earn recognized, trackable credentials as you complete learning milestones.",
          bullets: ["Digital certificates", "Trackable credentials", "Recognition within ecosystem"],
        },
      ],
      integratedHeading1: "One Integrated Platform",
      integratedHeading2: "For Continuous Learning",
      process: [
        "Assess Your Skills",
        "Identify Skill Gaps",
        "Get Personalized Learning",
        "Learn at Your Own Pace",
        "Track Your Progress",
        "Earn Certification",
      ],
    },
    howItWorksPage: {
      heroTitle: "How It Works",
      heroSubtitle:
        "A simple, structured and intelligent learning journey to help statistical officers assess, learn and grow — powered by AI.",
      quickSteps: [
        { title: "Register", desc: "Create your account to get started" },
        { title: "Assess", desc: "Take AI-powered assessments" },
        { title: "Identify Skill Gaps", desc: "Get personalized insights" },
        { title: "Get Learning Path", desc: "Receive customized learning recommendations" },
        { title: "Learn", desc: "Access curated learning resources" },
        { title: "Re-Assess", desc: "Evaluate your improvement" },
        { title: "Track Progress", desc: "Monitor achievements and earn certificates" },
      ],
      stepByStepHeading: "Step-by-Step Process",
      cycleHeading: "A Continuous Learning Cycle",
      cycleSteps: ["Assess", "Learn", "Grow"],
      cycleFooter: "For a Stronger Statistical India",
    },
    contactPage: {
      heroTitle: "Contact Us",
      heroDescription:
        "We are here to help. Reach out to us for support, queries, feedback or collaboration opportunities related to Karmayogi-StatAI.",
      emailTitle: "Email Support",
      emailDesc: "For general queries, support and feedback",
      emailValue: "karmayogi-statai@mospi.gov.in",
      helpdeskTitle: "Helpdesk",
      helpdeskDesc: "Talk to our support team",
      helpdeskHours: "(Mon – Fri, 9:30 AM – 6:00 PM)",
      helpdeskValue: "011-23368809",
      addressTitle: "Office Address",
      addressLine1: "Ministry of Statistics & Programme Implementation",
      addressLine2: "New Delhi – 110001",
      hoursTitle: "Support Hours",
      hoursLine1: "Monday – Friday",
      hoursLine2: "9:30 AM – 6:00 PM",
      hoursLine3: "(Except Government Holidays)",
      formHeading: "Send Us a Message",
      fieldName: "Full Name *",
      fieldEmail: "Email Address *",
      fieldUserType: "User Type *",
      fieldSubject: "Subject *",
      fieldMessage: "Message *",
      submitButton: "Send Message",
      faqHeading: "Frequently Asked Questions",
      faqs: [
        {
          q: "How do I register on Karmayogi-StatAI?",
          a: "Click the Register button in the header, choose your user type, and complete the short sign-up form.",
        },
        {
          q: "Who can use this platform?",
          a: "Statistical officers, administrators, and new officers or users within the statistical ecosystem of the Government of India.",
        },
        {
          q: "What kind of assessments are available?",
          a: "Role-based, adaptive AI-powered assessments covering domain knowledge, analytical skills and role-specific competencies.",
        },
        {
          q: "How do I access learning resources?",
          a: "Once logged in, curated resources are recommended on your dashboard based on your assessment results and role.",
        },
        {
          q: "Will I get a certificate after completion?",
          a: "Yes, digital certificates and trackable credentials are issued on completing eligible learning paths.",
        },
        {
          q: "How can I get technical support?",
          a: "Email karmayogi-statai@mospi.gov.in or call the helpdesk during support hours listed above.",
        },
      ],
      officeHeading: "Our Office Location",
      officeText:
        "Ministry of Statistics & Programme Implementation, Sardar Patel Bhavan, Sansad Marg, New Delhi – 110001",
    },
    dashboard: {
      officer: {
        welcomeBack: "Welcome back,",
        overallScoreLabel: "Overall Competency Score",
        startAnalysisButton: "Start AI Competency Assessment",
        competencyOverviewHeading: "Competency Overview",
        skillGapsHeading: "Detected Skill Gaps",
        recommendationsHeading: "Personalized Recommendations",
        learningPathHeading: "Current Learning Path",
        courseProgressHeading: "Course Progress",
        assessmentsHeading: "Upcoming Assessments",
        activityHeading: "Recent Activity",
        quickLinksHeading: "Quick Access",
        startAssessmentButton: "Start",
        modalTitle: "AI Competency Assessment",
        modalSubtitle: "A few quick questions to personalize your learning",
        modalNextButton: "Next",
        modalFinishButton: "See My Results",
        modalResultHeading: "Here's what we found",
        modalResultText: "Based on your answers, these are your top areas to focus on next.",
        modalViewGapsButton: "View My Skill Gaps",
        overviewTabLabel: "Overview",
        profileTabLabel: "Competency Profile",
        assessmentsTabLabel: "Assessments & Quizzes",
        resourcesTabLabel: "Learning Resources",
        learningHoursLabel: "Learning Hours (this quarter)",
        overallProgressLabel: "Overall Learning Path Progress",
        aiAssistantHeading: "AI Assistant",
        aiAssistantAccessText: "Ask me about your competencies, recommendations or assessments.",
        aiAssistantTitle: "Karmayogi AI Assistant",
        aiAssistantPlaceholder: "Type a question…",
        aiAssistantGreeting: "Hi! I'm your AI assistant (mock preview). Ask me about your skill gaps, recommendations, progress or assessments.",
        aiAssistantLauncherLabel: "Open AI Assistant",
        designationLabel: "Designation",
        departmentLabel: "Department",
        jobRoleLabel: "Job Role",
        currentAssignmentLabel: "Current Assignment",
        qualificationsLabel: "Educational Qualifications",
        experienceLabel: "Work Experience",
        previousTrainingLabel: "Previous Training",
        takeAssessmentButton: "Take Assessment",
        generateQuizButton: "Generate Practice Quiz from Course",
        aiGeneratedQuizTitle: "AI-Generated Practice Quiz",
        quizCheckAnswerButton: "Check Answer",
        quizNextButton: "Next",
        quizFinishButton: "Finish",
        quizCorrectFeedback: "Correct!",
        quizIncorrectFeedback: "Not quite — review this topic.",
        quizScoreLabel: "Your Score",
        quizDoneButton: "Done",
        quizGeneratedBadge: "Generated from uploaded course content",
        catalogueHeading: "Course Catalogue",
        skillGapsTabLabel: "Skill Gaps & Recommendations",
        learningTabLabel: "Learning",
        progressTabLabel: "Progress",
        settingsTabLabel: "Settings",
        statusCompleted: "Completed",
        statusInProgress: "In Progress",
        statusUpcoming: "Upcoming",
        severityHigh: "High",
        severityMedium: "Medium",
        severityLow: "Low",
        hoursUnit: "hrs",
        qaSkillGapAnalysis: "Skill Gap Analysis",
        qaSkillGapsRecommendations: "Skill Gaps & Recommendations",
        qaLearningResources: "Learning Resources",
        qaAssessmentCentre: "Assessment Centre",
        qaMyProgress: "My Progress",
        aiQuizCardSubtitle: "Upload/select content, choose count and difficulty, generate, preview/edit, then publish.",
        aiQuizNoneYetText: "No AI-generated quizzes published yet.",
        aiQuizPublishedCountText: "{count} AI-generated quiz(zes) published so far.",
        recommendationsConnectText: "These recommendations directly address the skill gaps identified above.",
        progressIntroText: "A closer look at how your learning is progressing over time.",
        settingsSectionProfile: "Profile / Personal Information",
        settingsSectionSecurity: "Account & Security",
        settingsChangePasswordLabel: "Password",
        settingsChangePasswordAction: "Change Password",
        settingsSectionLanguage: "Language",
        settingsSectionNotifications: "Notifications",
        settingsEmailNotifications: "Email Notifications",
        settingsAssessmentReminders: "Assessment Reminders",
        settingsTrainingAlerts: "Training / Completion Alerts",
        settingsSkillGapAlerts: "Skill-Gap Alerts",
        settingsSectionAccessibility: "Accessibility",
        settingsHighContrast: "High-Contrast Mode",
        settingsFontSize: "Font Size",
        settingsScreenReaderHints: "Screen-Reader Optimized Hints",
        settingsKeyboardNavHints: "Keyboard Navigation Hints",
        settingsSectionPrivacy: "Privacy",
        settingsDataSharingConsent: "Allow My Data to Be Used for Personalized Recommendations",
        settingsSectionHelp: "Help & Support",
        settingsHelpCenter: "Help Center",
        settingsUserGuide: "User Guide",
        settingsFaqs: "FAQs",
        settingsContactSupport: "Contact Support",
        settingsReportIssue: "Report an Issue",
        settingsFeedback: "Feedback",
        settingsSectionAbout: "About / Portal Information",
        settingsAboutPlatform: "About Karmayogi-StatAI",
        settingsInitiativeInfo: "Ministry of Statistics & Programme Implementation (MoSPI), in collaboration with iGOT Karmayogi and NSSTA",
        settingsCopyright: "© 2026 Government of India (placeholder)",
        settingsViewAction: "View →",
        settingsSaved: "Saved",
        settingsLogoutButton: "Logout",
        assistantGapsIntro: "Your biggest current gaps are {skills}. I'd suggest starting with \u201c{course}\u201d.",
        assistantExplainGap: "{skill} is currently at {score}/100 — that's below where we'd expect for confident independent work, which is why it's flagged as a gap.",
        assistantExplainOk: "{skill} is currently at {score}/100 — that's a solid score, so it isn't flagged as a gap right now.",
        assistantRecommendations: "Based on your skill gaps, I'd recommend: {courses}.",
        assistantProgress: "You're at {score}/100 overall, {progress}% through your current learning path, with {hours} learning hours logged this quarter.",
        assistantAssessmentsPending: "You have {count} pending assessment(s): {assessments}.",
        assistantAssessmentsNone: "You have no pending assessments right now — nice work staying on top of things!",
        assistantFallback: "I'm a frontend mock assistant for now, so I can only answer questions about your skill gaps, recommendations, progress and assessments using your existing dashboard data.",
        assistantTyping: "Typing…",
        chipSkillGaps: "What are my skill gaps?",
        chipWhyPython: "Why was Python identified as a gap?",
        chipRecommendedCourses: "What courses are recommended for me?",
        chipProgress: "Show my learning progress.",
        chipPendingAssessment: "What assessment is pending?",
        journeyStepCompetency: "Competency",
        journeyStepSkillGap: "Skill Gap",
        journeyStepLearning: "Personalized Learning",
        journeyStepAssessment: "Assessment",
        journeyStepProgress: "Progress",
        pipelineHeading: "What happens next",
        pipelineCompetency: "Competency Updated",
        pipelineSkillGap: "Skill Gap Reassessed",
        pipelineRecommendation: "Recommendations Refreshed",
        wizStepSelectContent: "Select Content",
        wizStepConfigure: "Configure Quiz",
        wizStepGenerating: "Generating Quiz…",
        wizStepPreview: "Preview & Edit",
        wizStepPublished: "Quiz Published",
        wizContentLabel: "Choose learning content",
        wizCountLabel: "Number of questions",
        wizDifficultyLabel: "Difficulty",
        wizGenerateButton: "Generate",
        wizGeneratingText: "Generating questions from the selected content…",
        wizPreviewHint: "Review and edit the generated questions before publishing.",
        wizRemoveButton: "Remove question",
        wizBackButton: "← Back",
        wizPublishButton: "Publish Quiz",
        wizPublishedText: "Your quiz has been published and added to Assessments.",
        wizDoneButton: "Done",
      },
      admin: {
        welcomeHeading: "Welcome, Administrator",
        totalOfficersLabel: "Total Officers",
        totalDepartmentsLabel: "Total Departments",
        officersAssessedLabel: "Officers Assessed",
        totalCoursesLabel: "Learning Resources / Courses",
        competencyOverviewHeading: "Competency Distribution",
        skillGapAnalyticsHeading: "Aggregate Skill Gap Analytics",
        departmentPerformanceHeading: "Department Performance",
        activityHeading: "Recent Platform Activity",
        quickActionsHeading: "Quick Actions",
        officersHeading: "Officer Management",
        pendingHeading: "Pending Registrations",
        departmentsHeading: "Departments",
        coursesHeading: "Courses",
        resourcesHeading: "Learning Resources",
        recommendationsHeading: "Recommendations",
        assessmentsHeading: "Assessments",
        questionBankHeading: "Question Bank",
        reportsHeading: "Reports",
        profileHeading: "Profile",
        settingsHeading: "Settings",
        trainingEffectivenessHeading: "Training Effectiveness",
        emergingSkillsHeading: "Emerging Skill Requirements",
        tpacProgramsHeading: "NSSTA TPAC Programs",
        learningActivityHeading: "Learning Activity",
        predictiveInsightsHeading: "Predictive Capacity-Building Insights",
        journeyStepWorkforce: "Workforce Competency",
        journeyStepSkillGaps: "Skill Gaps",
        journeyStepTrainingEffectiveness: "Training Effectiveness",
        journeyStepEmergingSkills: "Emerging Skills",
        journeyStepCapacityPlanning: "Capacity Planning",
      },
      sidebar: {
        dashboard: "Dashboard",
        officers: "Officer Management",
        pending: "Pending Registrations",
        departments: "Departments",
        competencyAnalytics: "Competency Analytics",
        skillGapAnalytics: "Skill Gap Analytics",
        courses: "Courses",
        resources: "Learning Resources",
        recommendations: "Recommendations",
        assessments: "Assessments",
        questionBank: "MCQ/Question Bank",
        reports: "Reports",
        profile: "Profile",
        settings: "Settings",
        logout: "Logout",
        trainingEffectiveness: "Training Effectiveness",
        emergingSkills: "Emerging Skills",
        tpacPrograms: "NSSTA TPAC Programs",
        assessmentsGroup: "Assessments",
        questionBankGroup: "Question Bank",
        aiAssessmentGenerator: "AI Assessment Generator",
        publishedAssessments: "Published Assessments",
        assessmentResults: "Assessment Results",
        generatedQuestions: "Generated Questions",
      },
      table: {
        name: "Name",
        id: "ID",
        department: "Department",
        designation: "Designation",
        status: "Status",
        requestedRole: "Requested Role",
        date: "Date",
        officers: "Officers",
        avgScore: "Avg. Score",
        title: "Title",
        category: "Category",
        enrolled: "Enrolled",
        duration: "Duration",
        type: "Type",
        domain: "Domain",
        officer: "Officer",
        recommended: "Recommended",
        attempts: "Attempts",
        difficulty: "Difficulty",
        generatedOn: "Generated On",
        question: "Question",
        completionRate: "Completion Rate",
        scoreImprovement: "Avg. Score Improvement",
        demandTrend: "Demand Trend",
        cohortSize: "Cohort Size",
        period: "Period",
        hoursLogged: "Hours Logged",
        source: "Source",
        completions: "Completions",
      },
    },
  },
  hi: {
    nav: {
      home: "होम",
      about: "परिचय",
      features: "विशेषताएँ",
      howItWorks: "यह कैसे काम करता है",
      contact: "संपर्क करें",
      login: "लॉगिन",
      register: "पंजीकरण",
    },
    header: {
      ministryLine1: "भारत सरकार",
      ministryLine2: "सांख्यिकी और कार्यक्रम",
      ministryLine3: "कार्यान्वयन मंत्रालय",
    },
    hero: {
      pill: "सीखें  •  आकलन करें  •  आगे बढ़ें    |    एक सशक्त सांख्यिकीय भारत के लिए",
      subheadingLine1: "एआई-संचालित दक्षता इंटेलिजेंस",
      subheadingLine2: "और अनुकूली शिक्षण मंच",
      description:
        "अपनी कौशल कमियों की पहचान करें, व्यक्तिगत शिक्षण पथ खोजें, और एआई-संचालित मूल्यांकन के माध्यम से अपनी दक्षताओं को मजबूत करें।",
      ctaPrimary: "शुरू करें",
      ctaSecondary: "पंजीकरण करें",
    },
    features: {
      assessSkills: "अपने कौशल का आकलन करें",
      identifyGaps: "कौशल अंतराल की पहचान करें",
      personalizedLearning: "व्यक्तिगत शिक्षण प्राप्त करें",
      aiQuizzes: "एआई-संचालित क्विज़ लें",
    },
    stats: {
      officersLabel: "सांख्यिकी अधिकारी",
      resourcesLabel: "शिक्षण संसाधन",
      domainsLabel: "दक्षता क्षेत्र",
      aiValue: "एआई-संचालित",
      aiLabel: "मूल्यांकन और सिफारिशें",
    },
    collaboration: {
      heading: "सहयोग में",
      mospiName: "MoSPI",
      mospiDesc1: "सांख्यिकी और कार्यक्रम",
      mospiDesc2: "कार्यान्वयन मंत्रालय, भारत सरकार",
      igotName: "iGOT कर्मयोगी",
      nsstaName: "NSSTA",
      nsstaDesc: "राष्ट्रीय सांख्यिकी प्रणाली प्रशिक्षण अकादमी",
    },
    footer: {
      about: "परिचय",
      features: "विशेषताएँ",
      howItWorks: "यह कैसे काम करता है",
      contact: "संपर्क करें",
      privacy: "गोपनीयता नीति",
      terms: "उपयोग की शर्तें",
      statement: "कर्मयोगी-स्टेटएआई | एक कुशल सांख्यिकीय भारत का निर्माण",
    },
    modals: {
      loginTitle: "कर्मयोगी-स्टेटएआई में लॉगिन करें",
      loginSubtitle: "अपने दक्षता डैशबोर्ड तक पहुँचें",
      registerTitle: "अपना खाता बनाएं",
      registerSubtitle: "सांख्यिकीय दक्षता नेटवर्क से जुड़ें",
      emailLabel: "ईमेल / कर्मचारी आईडी",
      passwordLabel: "पासवर्ड",
      nameLabel: "पूरा नाम",
      userType: "मैं हूँ",
      userTypeOfficer: "सांख्यिकी अधिकारी",
      userTypeAdmin: "प्रशासक",
      userTypeNew: "नया अधिकारी / उपयोगकर्ता",
      submitLogin: "लॉगिन",
      submitRegister: "खाता बनाएं",
      close: "बंद करें",
      switchToRegister: "नए हैं? पंजीकरण करें",
      switchToLogin: "पहले से खाता है? लॉगिन करें",
    },
    breadcrumb: {
      home: "होम",
    },
    loginGateway: {
      welcome: "स्वागत है",
      subtitle: "मंच तक पहुँचने का तरीका चुनें",
      backToHome: "← होम पर वापस जाएं",
      backToRoleSelection: "← भूमिका चयन पर वापस जाएं",
      officerTitle: "सांख्यिकी अधिकारी",
      officerDescription: "व्यक्तिगत शिक्षण, आकलन तक पहुँचें और अपनी दक्षता वृद्धि को ट्रैक करें।",
      officerFeatures: [
        "एआई-संचालित आकलन लें",
        "कौशल अंतराल की पहचान करें",
        "व्यक्तिगत शिक्षण पथ प्राप्त करें",
        "अपनी प्रगति को ट्रैक करें",
      ],
      officerCta: "सांख्यिकी अधिकारी के रूप में जारी रखें →",
      adminTitle: "प्रशासक",
      adminDescription: "उपयोगकर्ताओं, आकलनों, शिक्षण संसाधनों और मंच विश्लेषण का प्रबंधन करें।",
      adminFeatures: [
        "अधिकारी खातों का प्रबंधन करें",
        "आकलन बनाएं और प्रबंधित करें",
        "शिक्षण संसाधनों का प्रबंधन करें",
        "विश्लेषण और रिपोर्ट देखें",
      ],
      adminCta: "प्रशासक के रूप में जारी रखें →",
      infoSecureTitle: "सुरक्षित सरकारी मंच",
      infoSecureText: "आपका डेटा सुरक्षित है।",
      infoOfficerTitle: "सांख्यिकी अधिकारियों के लिए",
      infoOfficerText: "कौशल बनाएं। व्यावसायिक रूप से आगे बढ़ें।",
      infoIndiaTitle: "एक डेटा-संचालित भारत की ओर",
      infoIndiaText: "एक बेहतर कल के लिए सांख्यिकीय क्षमताओं को मजबूत करना।",
      officerFormTitle: "सांख्यिकी अधिकारी लॉगिन",
      officerFormSubtitle: "अपनी दक्षता, आकलन और व्यक्तिगत शिक्षण तक पहुँचने के लिए साइन इन करें।",
      adminFormTitle: "प्रशासक लॉगिन",
      adminFormSubtitle: "दक्षताओं, आकलनों, शिक्षण संसाधनों, अधिकारियों और मंच विश्लेषण का प्रबंधन करने के लिए साइन इन करें।",
      adminIdLabel: "आधिकारिक एडमिन आईडी / ईमेल *",
      forgotPassword: "पासवर्ड भूल गए?",
      newUserRegister: "नए उपयोगकर्ता? पंजीकरण करें",
      breadcrumbLogin: "लॉगिन",
      breadcrumbOfficer: "सांख्यिकी अधिकारी",
      breadcrumbAdmin: "प्रशासक",
      assessTitle: "आकलन",
      assessText: "एआई-संचालित आकलन के साथ अपनी दक्षताओं का मूल्यांकन करें।",
      learnTitle: "सीखें",
      learnText: "अपनी भूमिका के अनुरूप व्यक्तिगत शिक्षण संसाधन प्राप्त करें।",
      growTitle: "आगे बढ़ें",
      growText: "अपनी प्रगति को ट्रैक करें और अपने प्रभाव को मजबूत करें।",
      officerEmailLabel: "आधिकारिक ईमेल / अधिकारी आईडी *",
      officerEmailPlaceholder: "अपना आधिकारिक ईमेल या अधिकारी आईडी दर्ज करें",
      passwordLabelRequired: "पासवर्ड *",
      passwordPlaceholder: "अपना पासवर्ड दर्ज करें",
      adminEmailPlaceholder: "अपनी प्रशासक आईडी या ईमेल दर्ज करें",
      rememberMe: "मुझे याद रखें",
      newUserQuestion: "कर्मयोगी-स्टेटएआई में नए हैं?",
      registerAsOfficer: "सांख्यिकी अधिकारी के रूप में पंजीकरण करें",
      registerAsAdmin: "प्रशासक के रूप में पंजीकरण करें",
      secureOfficerTitle: "सुरक्षित सरकारी मंच",
      secureOfficerText: "आपके क्रेडेंशियल और शिक्षण डेटा सुरक्षित हैं।",
      secureAdminTitle: "सुरक्षित प्रशासक पहुँच",
      secureAdminText: "केवल अधिकृत कर्मी। प्रशासनिक पहुँच सुरक्षित प्रमाणीकरण द्वारा संरक्षित है।",
    },
    registerGateway: {
      heading: "अपना कर्मयोगी-स्टेटएआई खाता बनाएं",
      subtitle: "जारी रखने के लिए अपनी भूमिका चुनें।",
      officerTitle: "सांख्यिकी अधिकारी",
      officerDescription: "दक्षताओं का आकलन करने, कौशल अंतराल की पहचान करने, सीखने और अपनी प्रगति को ट्रैक करने के लिए खाता बनाएं।",
      officerFeatures: [
        "एआई-संचालित आकलन लें",
        "व्यक्तिगत शिक्षण पथ प्राप्त करें",
        "शिक्षण संसाधनों तक पहुँचें",
        "अपनी वृद्धि को ट्रैक करें",
      ],
      officerCta: "सांख्यिकी अधिकारी के रूप में जारी रखें →",
      adminTitle: "प्रशासक",
      adminDescription: "मंच, अधिकारियों, आकलनों और विश्लेषण का प्रबंधन करने के लिए अधिकृत कर्मियों हेतु खाता बनाएं।",
      adminFeatures: [
        "अधिकारी खातों का प्रबंधन करें",
        "आकलन बनाएं और प्रबंधित करें",
        "शिक्षण संसाधनों का प्रबंधन करें",
        "मंच विश्लेषण देखें",
      ],
      adminCta: "प्रशासक के रूप में जारी रखें →",
      alreadyHaveAccount: "पहले से खाता है?",
      loginLink: "लॉगिन",
      backToRegisterSelection: "← पंजीकरण चयन पर वापस जाएं",
    },
    registerForm: {
      officerFormTitle: "सांख्यिकी अधिकारी पंजीकरण",
      officerFormSubtitle: "अपनी दक्षताओं का आकलन और निर्माण शुरू करने के लिए अपना खाता बनाएं।",
      adminFormTitle: "प्रशासक पंजीकरण",
      adminFormSubtitle: "कर्मयोगी-स्टेटएआई मंच का प्रबंधन करने के लिए एक प्रशासक खाता बनाएं।",
      fullNameLabel: "पूरा नाम *",
      fullNamePlaceholder: "अपना पूरा नाम दर्ज करें",
      officerIdLabel: "कर्मचारी / अधिकारी आईडी *",
      officerIdPlaceholder: "अपनी कर्मचारी या अधिकारी आईडी दर्ज करें",
      adminIdLabel: "प्रशासक आईडी *",
      adminIdPlaceholder: "अपनी प्रशासक आईडी दर्ज करें",
      emailLabel: "ईमेल पता *",
      emailPlaceholder: "अपना ईमेल पता दर्ज करें",
      mobileLabel: "मोबाइल नंबर *",
      mobilePlaceholder: "अपना 10-अंकीय मोबाइल नंबर दर्ज करें",
      officerDepartmentLabel: "विभाग *",
      adminDepartmentLabel: "विभाग / संगठन *",
      departmentPlaceholder: "अपना विभाग दर्ज करें",
      designationLabel: "पदनाम *",
      designationPlaceholder: "अपना पदनाम दर्ज करें",
      stateLabel: "राज्य *",
      statePlaceholder: "अपना राज्य दर्ज करें",
      districtLabel: "जिला *",
      districtPlaceholder: "अपना जिला दर्ज करें",
      confirmPasswordLabel: "पासवर्ड की पुष्टि करें *",
      confirmPasswordPlaceholder: "अपना पासवर्ड फिर से दर्ज करें",
      termsText: "मैं उपयोग की शर्तों और गोपनीयता नीति से सहमत हूँ *",
      registerButton: "पंजीकरण करें",
      successTitle: "पंजीकरण सफल",
      successText: "आपके खाते का अनुरोध दर्ज कर लिया गया है। अनुमोदन के बाद आप साइन इन कर सकते हैं।",
      backToHomeAfterSuccess: "← होम पर वापस जाएं",
    },
    validation: {
      requiredFields: "कृपया सभी आवश्यक फ़ील्ड भरें।",
      passwordMismatch: "पासवर्ड मेल नहीं खाते।",
      termsRequired: "जारी रखने के लिए कृपया उपयोग की शर्तों और गोपनीयता नीति को स्वीकार करें।",
      invalidEmail: "कृपया एक मान्य ईमेल पता दर्ज करें।",
      invalidMobile: "कृपया एक मान्य 10-अंकीय मोबाइल नंबर दर्ज करें।",
      otpIncomplete: "कृपया पूरा 6-अंकीय OTP दर्ज करें।",
      otpIncorrect: "आपके द्वारा दर्ज किया गया OTP गलत है। कृपया पुनः प्रयास करें।",
    },
    sidePanel: {
      words: ["डेटा", "लोग", "नीति", "प्रभाव"],
      headline: "एक सशक्त सांख्यिकीय भारत के लिए",
      assessTitle: "आकलन",
      assessText: "एआई-संचालित आकलन के साथ अपनी दक्षताओं का मूल्यांकन करें।",
      learnTitle: "सीखें",
      learnText: "अपनी भूमिका के अनुरूप व्यक्तिगत संसाधन प्राप्त करें।",
      growTitle: "आगे बढ़ें",
      growText: "अपनी प्रगति को ट्रैक करें और अपने प्रभाव को मजबूत करें।",
      manageTitle: "प्रबंधन करें",
      manageText: "मंच उपयोगकर्ताओं, आकलनों और संसाधनों की देखरेख करें।",
      monitorTitle: "निगरानी करें",
      monitorText: "दक्षता वृद्धि और मंच विश्लेषण को ट्रैक करें।",
      strengthenTitle: "मजबूत करें",
      strengthenText: "एक कुशल और डेटा-संचालित कार्यबल को सक्षम बनाएं।",
    },
    officerWizard: {
      heading: "सांख्यिकी अधिकारी खाता बनाएं",
      subtitle: "अपनी दक्षताओं का आकलन करने, कौशल अंतराल की पहचान करने और अपनी शिक्षण यात्रा को ट्रैक करने के लिए कर्मयोगी-स्टेटएआई से जुड़ें।",
      steps: ["बुनियादी जानकारी", "व्यावसायिक विवरण", "पासवर्ड बनाएं", "सत्यापन"],
      backButton: "← वापस",
      nextButton: "आगे →",
      step1Heading: "बुनियादी जानकारी",
      step1Subtitle: "अपना खाता बनाने के लिए कृपया अपना बुनियादी विवरण प्रदान करें।",
      officialEmailLabel: "आधिकारिक ईमेल *",
      officialEmailPlaceholder: "अपना आधिकारिक ईमेल दर्ज करें",
      officerMobilePlaceholder: "अपना मोबाइल नंबर दर्ज करें",
      officerIdLabel: "अधिकारी आईडी / कर्मचारी आईडी *",
      officerIdPlaceholder: "अपनी अधिकारी आईडी दर्ज करें",
      departmentLabel: "विभाग / संगठन *",
      departmentPlaceholder: "विभाग चुनें",
      designationLabel: "पदनाम *",
      designationPlaceholder: "पदनाम चुनें",
      stateLabel: "राज्य / केंद्र शासित प्रदेश *",
      statePlaceholder: "राज्य / केंद्र शासित प्रदेश चुनें",
      languageLabel: "पसंदीदा भाषा *",
      step2Heading: "व्यावसायिक विवरण",
      step2Subtitle: "हमें अपनी वर्तमान भूमिका और व्यावसायिक अनुभव के बारे में बताएं।",
      experienceLabel: "अनुभव के वर्ष *",
      experiencePlaceholder: "अनुभव के वर्ष चुनें",
      roleLabel: "वर्तमान भूमिका / कार्य *",
      rolePlaceholder: "अपनी वर्तमान भूमिका चुनें",
      domainLabel: "सांख्यिकीय क्षेत्र / डोमेन *",
      domainPlaceholder: "सांख्यिकीय डोमेन चुनें",
      skillsHeading: "वर्तमान कौशल क्षेत्र",
      skillsSubtitle: "अपनी भूमिका से संबंधित सभी कौशलों का चयन करें (आप बाद में संशोधित कर सकते हैं)।",
      skillOptions: [
        "डेटा विश्लेषण",
        "सांख्यिकीय विधियाँ",
        "डेटा विज़ुअलाइज़ेशन",
        "SQL",
        "पायथन",
        "R",
        "मशीन लर्निंग",
        "डेटाबेस प्रबंधन",
        "सर्वेक्षण पद्धति",
        "डेटा गुणवत्ता",
        "रिपोर्ट निर्माण",
      ],
      responsibilitiesLabel: "प्राथमिक कार्य जिम्मेदारियाँ",
      responsibilitiesPlaceholder: "अपनी प्राथमिक कार्य जिम्मेदारियों का वर्णन करें",
      step3Heading: "पासवर्ड बनाएं",
      step3Subtitle: "अपने कर्मयोगी-स्टेटएआई खाते के लिए एक सुरक्षित पासवर्ड बनाएं।",
      createAccountButton: "आगे →",
      passwordRequirements: [
        "कम से कम 8 अक्षर",
        "एक बड़ा अक्षर",
        "एक छोटा अक्षर",
        "एक अंक",
        "एक विशेष वर्ण",
      ],
      passwordStrengthLabel: "पासवर्ड की मजबूती",
      step4Heading: "अपने खाते को सत्यापित करें",
      step4Text: "हमने आपके पंजीकृत ईमेल पर एक सत्यापन कोड भेजा है।",
      changeLink: "बदलें",
      resendQuestion: "OTP प्राप्त नहीं हुआ?",
      resendButton: "कोड पुनः भेजें",
      otpInfo: "कृपया सत्यापन कोड के लिए अपना इनबॉक्स (और स्पैम फ़ोल्डर) जांचें। यह फ्रंटएंड प्रोटोटाइप के लिए एक मॉक सत्यापन प्रवाह है — कोई वास्तविक ईमेल नहीं भेजा गया है।",
      verifyButton: "सत्यापित करें और खाता बनाएं",
      successHeading: "खाता सफलतापूर्वक बनाया गया",
      successText: "आपका कर्मयोगी-स्टेटएआई खाता सफलतापूर्वक बना दिया गया है।",
      confirmationSentTo: "एक पुष्टिकरण ईमेल भेजा गया है",
      checkInboxText: "आगे के निर्देशों के लिए कृपया अपना इनबॉक्स (और स्पैम फ़ोल्डर) जांचें।",
      goToLoginButton: "लॉगिन पर जाएं →",
      goToDashboardButton: "डैशबोर्ड पर जाएं →",
    },
    adminWizard: {
      heading: "प्रशासक खाता बनाएं",
      subtitle: "कर्मयोगी-स्टेटएआई मंच के प्रबंधन के लिए एक अधिकृत प्रशासक के रूप में पंजीकरण करें।",
      steps: ["बुनियादी जानकारी", "व्यावसायिक विवरण", "पासवर्ड बनाएं", "सत्यापन"],
      step1Heading: "बुनियादी जानकारी",
      step1Subtitle: "अपना प्रशासक खाता बनाने के लिए कृपया अपना आधिकारिक विवरण प्रदान करें।",
      employeeIdLabel: "आधिकारिक कर्मचारी आईडी *",
      employeeIdPlaceholder: "अपनी आधिकारिक कर्मचारी आईडी दर्ज करें",
      officialContactLabel: "आधिकारिक संपर्क नंबर *",
      officialContactPlaceholder: "अपना आधिकारिक संपर्क नंबर दर्ज करें",
      departmentLabel: "विभाग / संगठन *",
      departmentPlaceholder: "अपना विभाग या संगठन दर्ज करें",
      designationLabel: "पदनाम *",
      designationPlaceholder: "अपना पदनाम दर्ज करें",
      step2Heading: "व्यावसायिक विवरण",
      step2Subtitle: "अपनी प्रशासनिक भूमिका और जिम्मेदारियों के बारे में जानकारी प्रदान करें।",
      adminRoleLabel: "प्रशासनिक भूमिका *",
      adminRolePlaceholder: "अपनी प्रशासनिक भूमिका चुनें",
      yearsOfServiceLabel: "सेवा के वर्ष *",
      yearsOfServicePlaceholder: "सेवा के वर्ष चुनें",
      areaOfResponsibilityLabel: "जिम्मेदारी का क्षेत्र *",
      areaOfResponsibilityPlaceholder: "जिम्मेदारी का क्षेत्र चुनें",
      accessTypeLabel: "प्रशासक पहुँच प्रकार *",
      accessTypePlaceholder: "पहुँच प्रकार चुनें",
      accessTypeOptions: [
        "मंच प्रशासक",
        "विभाग प्रशासक",
        "आकलन प्रशासक",
        "शिक्षण संसाधन प्रशासक",
      ],
      authDetailsLabel: "प्राधिकरण / संदर्भ विवरण *",
      authDetailsPlaceholder: "किसी वरिष्ठ अधिकारी से प्राधिकरण विवरण या संदर्भ दर्ज करें",
      authDetailsMax: 300,
      reasonLabel: "प्रशासनिक पहुँच का अनुरोध करने का कारण *",
      reasonPlaceholder: "कृपया प्रशासक पहुँच का अनुरोध करने का उद्देश्य बताएं",
      reasonMax: 500,
      step3Heading: "पासवर्ड बनाएं",
      step3Subtitle: "अपने कर्मयोगी-स्टेटएआई प्रशासक खाते के लिए एक सुरक्षित पासवर्ड बनाएं।",
      step4Heading: "अपने खाते को सत्यापित करें",
      step4Description: "अपना प्रशासक पंजीकरण पूरा करने के लिए अपना आधिकारिक ईमेल पता सत्यापित करें।",
      step4Text: "हमने एक सत्यापन कोड भेजा है",
      verifyButton: "सत्यापित करें और अनुरोध सबमिट करें",
      requestSubmittedHeading: "प्रशासक पहुँच अनुरोध सबमिट किया गया",
      requestSubmittedText: "आपका प्रशासक पहुँच अनुरोध सफलतापूर्वक सबमिट कर दिया गया है। इसकी समीक्षा एक अधिकृत प्रशासक द्वारा की जाएगी।",
      pendingApprovalLabel: "अनुमोदन लंबित",
      goToLoginButton: "लॉगिन पर जाएं →",
      goToDashboardButton: "डैशबोर्ड पर जाएं →",
    },
    aboutPage: {
      heroTitle: "कर्मयोगी-स्टेटएआई के बारे में",
      heroDescription:
        "कर्मयोगी-स्टेटएआई एक एआई-संचालित दक्षता इंटेलिजेंस और अनुकूली शिक्षण मंच है, जिसे सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय (MoSPI), भारत सरकार के अंतर्गत सांख्यिकीय पारिस्थितिकी तंत्र के लिए विकसित किया गया है।",
      overviewHeading: "अवलोकन",
      overviewText:
        "कर्मयोगी-स्टेटएआई का उद्देश्य सांख्यिकी अधिकारियों और पेशेवरों की क्षमताओं को एक संरचित, डेटा-संचालित और व्यक्तिगत शिक्षण अनुभव के माध्यम से मजबूत करना है। यह मंच उपयोगकर्ताओं को अपने वर्तमान कौशल का आकलन करने, दक्षता अंतराल की पहचान करने, क्यूरेटेड शिक्षण संसाधनों तक पहुँचने, और एआई-संचालित मूल्यांकन व सिफारिशों के माध्यम से अपनी प्रगति को ट्रैक करने में सक्षम बनाता है।",
      objectivesHeading: "मुख्य उद्देश्य",
      objectives: [
        "सांख्यिकी अधिकारियों की दक्षताओं को मजबूत करना",
        "व्यक्तिगत और अनुकूली शिक्षण को सक्षम बनाना",
        "निरंतर व्यावसायिक विकास का समर्थन करना",
        "एक कुशल और भविष्य के लिए तैयार सांख्यिकीय पारिस्थितिकी तंत्र का निर्माण करना",
      ],
      cardWhoTitle: "इसका उपयोग कौन कर सकता है?",
      cardWhoText:
        "भारत सरकार के सांख्यिकीय पारिस्थितिकी तंत्र में सांख्यिकी अधिकारी, प्रशासक और नए अधिकारी या उपयोगकर्ता।",
      cardWhatTitle: "यह क्या करता है",
      cardWhatText:
        "दक्षताओं का आकलन करता है, कौशल अंतराल की पहचान करता है, और व्यक्तिगत, एआई-संचालित शिक्षण मार्गों की सिफारिश करता है।",
      cardWhyTitle: "यह क्यों महत्वपूर्ण है",
      cardWhyText:
        "एक कुशल सांख्यिकीय कार्यबल सटीक डेटा, सुदृढ़ नीति-निर्माण और एक मजबूत डिजिटल भारत के लिए आवश्यक है।",
      cardHowTitle: "यह कैसे सहायता करता है",
      cardHowText:
        "अनुकूली क्विज़, क्यूरेटेड संसाधनों और एक प्रगति ट्रैकर के माध्यम से जो निरंतर व्यावसायिक विकास का मार्गदर्शन करता है।",
      initiativeHeading: "इस पहल के बारे में",
      initiativeText:
        "MoSPI, iGOT कर्मयोगी और NSSTA के सहयोग से विकसित, यह पहल एक मजबूत सांख्यिकीय भारत के लिए भविष्य के लिए तैयार सांख्यिकीय कार्यबल बनाने हेतु संस्थागत विशेषज्ञता और आधुनिक एआई को एक साथ लाती है।",
    },
    featuresPage: {
      heroTitle: "मंच की विशेषताएँ",
      heroSubtitle:
        "एक मजबूत सांख्यिकीय पारिस्थितिकी तंत्र के लिए आकलन, सीखने, बढ़ने और दक्षताओं को ट्रैक करने हेतु एआई-संचालित उपकरणों का व्यापक समूह।",
      cards: [
        {
          title: "दक्षता आकलन",
          description: "डोमेन ज्ञान, विश्लेषणात्मक कौशल और भूमिका-विशिष्ट दक्षताओं का मूल्यांकन करने के लिए एआई-संचालित आकलन।",
          bullets: ["भूमिका-आधारित आकलन", "अनुकूली प्रश्न सेट", "तत्काल प्रदर्शन विश्लेषण"],
        },
        {
          title: "एआई कौशल-अंतराल विश्लेषण",
          description: "भूमिका और डोमेन अपेक्षाओं के अनुसार सटीक रूप से पहचानें कि आपकी दक्षताएँ कहाँ कम पड़ती हैं।",
          bullets: ["व्यक्तिगत अंतराल विश्लेषण", "डोमेन-वार अंतर्दृष्टि", "डेटा-संचालित सिफारिशें"],
        },
        {
          title: "व्यक्तिगत शिक्षण",
          description: "आपकी भूमिका, वर्तमान कौशल स्तर और करियर लक्ष्यों के अनुरूप शिक्षण मार्ग।",
          bullets: ["अनुकूलित शिक्षण पथ", "क्यूरेटेड शिक्षण संसाधन", "स्व-गति से शिक्षण"],
        },
        {
          title: "एआई-संचालित क्विज़",
          description: "क्विज़ के साथ अपने ज्ञान को सुदृढ़ करें जो वास्तविक समय में आपके प्रदर्शन के अनुसार अनुकूलित होते हैं।",
          bullets: ["विषय-वार क्विज़", "अनुकूली कठिनाई स्तर", "तत्काल प्रतिक्रिया और समाधान"],
        },
        {
          title: "प्रगति ट्रैकर",
          description: "एक विज़ुअल डैशबोर्ड जो दिखाता है कि समय के साथ आपकी दक्षताएँ कैसे बढ़ रही हैं।",
          bullets: ["विज़ुअल प्रगति डैशबोर्ड", "दक्षता-वार वृद्धि", "बैज और उपलब्धियाँ"],
        },
        {
          title: "शिक्षण संसाधन",
          description: "सांख्यिकी, डेटा एनालिटिक्स, जीआईएस और एआई/एमएल को कवर करने वाला क्यूरेटेड संसाधन पुस्तकालय।",
          bullets: ["ई-लर्निंग मॉड्यूल", "लेख, रिपोर्ट और केस स्टडी", "मल्टीमीडिया सामग्री"],
        },
        {
          title: "भूमिका-आधारित शिक्षण पथ",
          description: "प्रत्येक भूमिका को आवश्यक विशिष्ट दक्षताओं के आसपास संरचित शिक्षण यात्राएँ।",
          bullets: ["भूमिका-विशिष्ट दक्षताएँ", "संरचित शिक्षण पथ", "प्रासंगिक आकलन"],
        },
        {
          title: "प्रमाणन और मान्यता",
          description: "शिक्षण मील के पत्थर पूरा करने पर मान्यता प्राप्त, ट्रैक करने योग्य प्रमाणपत्र अर्जित करें।",
          bullets: ["डिजिटल प्रमाणपत्र", "ट्रैक करने योग्य क्रेडेंशियल", "पारिस्थितिकी तंत्र के भीतर मान्यता"],
        },
      ],
      integratedHeading1: "निरंतर शिक्षण के लिए",
      integratedHeading2: "एक एकीकृत मंच",
      process: [
        "अपने कौशल का आकलन करें",
        "कौशल अंतराल की पहचान करें",
        "व्यक्तिगत शिक्षण प्राप्त करें",
        "अपनी गति से सीखें",
        "अपनी प्रगति को ट्रैक करें",
        "प्रमाणन अर्जित करें",
      ],
    },
    howItWorksPage: {
      heroTitle: "यह कैसे काम करता है",
      heroSubtitle:
        "सांख्यिकी अधिकारियों को आकलन, सीखने और आगे बढ़ने में मदद करने के लिए एक सरल, संरचित और बुद्धिमान शिक्षण यात्रा — एआई द्वारा संचालित।",
      quickSteps: [
        { title: "पंजीकरण करें", desc: "शुरू करने के लिए अपना खाता बनाएं" },
        { title: "आकलन करें", desc: "एआई-संचालित आकलन लें" },
        { title: "कौशल अंतराल की पहचान करें", desc: "व्यक्तिगत अंतर्दृष्टि प्राप्त करें" },
        { title: "शिक्षण पथ प्राप्त करें", desc: "अनुकूलित शिक्षण सिफारिशें प्राप्त करें" },
        { title: "सीखें", desc: "क्यूरेटेड शिक्षण संसाधनों तक पहुँचें" },
        { title: "पुनः-आकलन करें", desc: "अपने सुधार का मूल्यांकन करें" },
        { title: "प्रगति ट्रैक करें", desc: "उपलब्धियों की निगरानी करें और प्रमाणपत्र अर्जित करें" },
      ],
      stepByStepHeading: "चरण-दर-चरण प्रक्रिया",
      cycleHeading: "एक सतत शिक्षण चक्र",
      cycleSteps: ["आकलन करें", "सीखें", "आगे बढ़ें"],
      cycleFooter: "एक सशक्त सांख्यिकीय भारत के लिए",
    },
    contactPage: {
      heroTitle: "संपर्क करें",
      heroDescription:
        "हम मदद के लिए यहाँ हैं। कर्मयोगी-स्टेटएआई से संबंधित सहायता, प्रश्नों, प्रतिक्रिया या सहयोग के अवसरों के लिए हमसे संपर्क करें।",
      emailTitle: "ईमेल सहायता",
      emailDesc: "सामान्य प्रश्नों, सहायता और प्रतिक्रिया के लिए",
      emailValue: "karmayogi-statai@mospi.gov.in",
      helpdeskTitle: "हेल्पडेस्क",
      helpdeskDesc: "हमारी सहायता टीम से बात करें",
      helpdeskHours: "(सोम – शुक्र, सुबह 9:30 – शाम 6:00)",
      helpdeskValue: "011-23368809",
      addressTitle: "कार्यालय का पता",
      addressLine1: "सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय",
      addressLine2: "नई दिल्ली – 110001",
      hoursTitle: "सहायता समय",
      hoursLine1: "सोमवार – शुक्रवार",
      hoursLine2: "सुबह 9:30 – शाम 6:00",
      hoursLine3: "(सरकारी छुट्टियों को छोड़कर)",
      formHeading: "हमें संदेश भेजें",
      fieldName: "पूरा नाम *",
      fieldEmail: "ईमेल पता *",
      fieldUserType: "उपयोगकर्ता प्रकार *",
      fieldSubject: "विषय *",
      fieldMessage: "संदेश *",
      submitButton: "संदेश भेजें",
      faqHeading: "अक्सर पूछे जाने वाले प्रश्न",
      faqs: [
        {
          q: "मैं कर्मयोगी-स्टेटएआई पर पंजीकरण कैसे करूँ?",
          a: "हेडर में पंजीकरण बटन पर क्लिक करें, अपना उपयोगकर्ता प्रकार चुनें, और संक्षिप्त साइन-अप फॉर्म पूरा करें।",
        },
        {
          q: "इस मंच का उपयोग कौन कर सकता है?",
          a: "भारत सरकार के सांख्यिकीय पारिस्थितिकी तंत्र में सांख्यिकी अधिकारी, प्रशासक और नए अधिकारी या उपयोगकर्ता।",
        },
        {
          q: "किस प्रकार के आकलन उपलब्ध हैं?",
          a: "डोमेन ज्ञान, विश्लेषणात्मक कौशल और भूमिका-विशिष्ट दक्षताओं को कवर करने वाले भूमिका-आधारित, अनुकूली एआई-संचालित आकलन।",
        },
        {
          q: "मैं शिक्षण संसाधनों तक कैसे पहुँच सकता हूँ?",
          a: "लॉगिन करने के बाद, आपके आकलन परिणामों और भूमिका के आधार पर आपके डैशबोर्ड पर क्यूरेटेड संसाधनों की सिफारिश की जाती है।",
        },
        {
          q: "क्या मुझे पूरा करने के बाद प्रमाणपत्र मिलेगा?",
          a: "हाँ, योग्य शिक्षण पथ पूरा करने पर डिजिटल प्रमाणपत्र और ट्रैक करने योग्य क्रेडेंशियल जारी किए जाते हैं।",
        },
        {
          q: "मुझे तकनीकी सहायता कैसे मिल सकती है?",
          a: "karmayogi-statai@mospi.gov.in पर ईमेल करें या ऊपर सूचीबद्ध सहायता समय के दौरान हेल्पडेस्क पर कॉल करें।",
        },
      ],
      officeHeading: "हमारे कार्यालय का स्थान",
      officeText:
        "सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय, सरदार पटेल भवन, संसद मार्ग, नई दिल्ली – 110001",
    },
    dashboard: {
      officer: {
        welcomeBack: "वापसी पर स्वागत है,",
        overallScoreLabel: "कुल दक्षता स्कोर",
        startAnalysisButton: "एआई दक्षता मूल्यांकन शुरू करें",
        competencyOverviewHeading: "दक्षता अवलोकन",
        skillGapsHeading: "पहचाने गए कौशल अंतराल",
        recommendationsHeading: "व्यक्तिगत सिफारिशें",
        learningPathHeading: "वर्तमान शिक्षण पथ",
        courseProgressHeading: "कोर्स प्रगति",
        assessmentsHeading: "आगामी मूल्यांकन",
        activityHeading: "हाल की गतिविधि",
        quickLinksHeading: "त्वरित पहुँच",
        startAssessmentButton: "शुरू करें",
        modalTitle: "एआई दक्षता मूल्यांकन",
        modalSubtitle: "आपके शिक्षण को व्यक्तिगत बनाने के लिए कुछ त्वरित प्रश्न",
        modalNextButton: "आगे",
        modalFinishButton: "मेरे परिणाम देखें",
        modalResultHeading: "यह रहा हमें जो मिला",
        modalResultText: "आपके उत्तरों के आधार पर, ये अगले फोकस के मुख्य क्षेत्र हैं।",
        modalViewGapsButton: "मेरे कौशल अंतराल देखें",
        overviewTabLabel: "अवलोकन",
        profileTabLabel: "दक्षता प्रोफ़ाइल",
        assessmentsTabLabel: "मूल्यांकन और क्विज़",
        resourcesTabLabel: "शिक्षण संसाधन",
        learningHoursLabel: "शिक्षण घंटे (इस तिमाही)",
        overallProgressLabel: "कुल शिक्षण पथ प्रगति",
        aiAssistantHeading: "एआई सहायक",
        aiAssistantAccessText: "अपनी दक्षताओं, सिफारिशों या मूल्यांकनों के बारे में पूछें।",
        aiAssistantTitle: "कर्मयोगी एआई सहायक",
        aiAssistantPlaceholder: "एक प्रश्न टाइप करें…",
        aiAssistantGreeting: "नमस्ते! मैं आपका एआई सहायक हूँ (मॉक पूर्वावलोकन)। मुझसे अपने कौशल अंतराल, सिफारिशों, प्रगति या मूल्यांकनों के बारे में पूछें।",
        aiAssistantLauncherLabel: "एआई सहायक खोलें",
        designationLabel: "पदनाम",
        departmentLabel: "विभाग",
        jobRoleLabel: "कार्य भूमिका",
        currentAssignmentLabel: "वर्तमान असाइनमेंट",
        qualificationsLabel: "शैक्षणिक योग्यताएँ",
        experienceLabel: "कार्य अनुभव",
        previousTrainingLabel: "पिछला प्रशिक्षण",
        takeAssessmentButton: "मूल्यांकन लें",
        generateQuizButton: "कोर्स से अभ्यास क्विज़ बनाएं",
        aiGeneratedQuizTitle: "एआई-जनित अभ्यास क्विज़",
        quizCheckAnswerButton: "उत्तर जांचें",
        quizNextButton: "आगे",
        quizFinishButton: "समाप्त करें",
        quizCorrectFeedback: "सही!",
        quizIncorrectFeedback: "सही नहीं — इस विषय की समीक्षा करें।",
        quizScoreLabel: "आपका स्कोर",
        quizDoneButton: "पूर्ण",
        quizGeneratedBadge: "अपलोड किए गए कोर्स सामग्री से जनित",
        catalogueHeading: "कोर्स सूची",
        skillGapsTabLabel: "कौशल अंतराल और सिफारिशें",
        learningTabLabel: "शिक्षण",
        progressTabLabel: "प्रगति",
        settingsTabLabel: "सेटिंग्स",
        statusCompleted: "पूर्ण",
        statusInProgress: "प्रगति पर",
        statusUpcoming: "आगामी",
        severityHigh: "उच्च",
        severityMedium: "मध्यम",
        severityLow: "निम्न",
        hoursUnit: "घंटे",
        qaSkillGapAnalysis: "कौशल अंतराल विश्लेषण",
        qaSkillGapsRecommendations: "कौशल अंतराल और सिफारिशें",
        qaLearningResources: "शिक्षण संसाधन",
        qaAssessmentCentre: "मूल्यांकन केंद्र",
        qaMyProgress: "मेरी प्रगति",
        aiQuizCardSubtitle: "सामग्री अपलोड/चुनें, संख्या और कठिनाई चुनें, बनाएं, पूर्वावलोकन/संपादन करें, फिर प्रकाशित करें।",
        aiQuizNoneYetText: "अभी तक कोई एआई-जनित क्विज़ प्रकाशित नहीं हुई है।",
        aiQuizPublishedCountText: "अब तक {count} एआई-जनित क्विज़ प्रकाशित हो चुकी हैं।",
        recommendationsConnectText: "ये सिफारिशें ऊपर पहचाने गए कौशल अंतरालों को सीधे संबोधित करती हैं।",
        progressIntroText: "आपकी शिक्षण प्रगति समय के साथ कैसी रही है, इस पर एक करीबी नज़र।",
        settingsSectionProfile: "प्रोफ़ाइल / व्यक्तिगत जानकारी",
        settingsSectionSecurity: "खाता और सुरक्षा",
        settingsChangePasswordLabel: "पासवर्ड",
        settingsChangePasswordAction: "पासवर्ड बदलें",
        settingsSectionLanguage: "भाषा",
        settingsSectionNotifications: "सूचनाएं",
        settingsEmailNotifications: "ईमेल सूचनाएं",
        settingsAssessmentReminders: "मूल्यांकन अनुस्मारक",
        settingsTrainingAlerts: "प्रशिक्षण / पूर्णता अलर्ट",
        settingsSkillGapAlerts: "कौशल-अंतराल अलर्ट",
        settingsSectionAccessibility: "सुगम्यता",
        settingsHighContrast: "उच्च-कंट्रास्ट मोड",
        settingsFontSize: "फ़ॉन्ट आकार",
        settingsScreenReaderHints: "स्क्रीन-रीडर अनुकूलित संकेत",
        settingsKeyboardNavHints: "कीबोर्ड नेविगेशन संकेत",
        settingsSectionPrivacy: "गोपनीयता",
        settingsDataSharingConsent: "व्यक्तिगत सिफारिशों के लिए मेरा डेटा उपयोग करने की अनुमति दें",
        settingsSectionHelp: "सहायता और समर्थन",
        settingsHelpCenter: "सहायता केंद्र",
        settingsUserGuide: "उपयोगकर्ता गाइड",
        settingsFaqs: "सामान्य प्रश्न",
        settingsContactSupport: "सहायता से संपर्क करें",
        settingsReportIssue: "समस्या की रिपोर्ट करें",
        settingsFeedback: "प्रतिक्रिया",
        settingsSectionAbout: "के बारे में / पोर्टल जानकारी",
        settingsAboutPlatform: "कर्मयोगी-स्टेटएआई के बारे में",
        settingsInitiativeInfo: "सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय (MoSPI), iGOT कर्मयोगी और NSSTA के सहयोग से",
        settingsCopyright: "© 2026 भारत सरकार (प्लेसहोल्डर)",
        settingsViewAction: "देखें →",
        settingsSaved: "सहेजा गया",
        settingsLogoutButton: "लॉगआउट",
        assistantGapsIntro: "आपके सबसे बड़े वर्तमान अंतराल हैं {skills}। मैं \u201c{course}\u201d से शुरू करने का सुझाव दूंगा।",
        assistantExplainGap: "{skill} वर्तमान में {score}/100 पर है — यह उस स्तर से कम है जो आत्मविश्वास से स्वतंत्र कार्य के लिए अपेक्षित है, इसलिए इसे अंतराल के रूप में चिह्नित किया गया है।",
        assistantExplainOk: "{skill} वर्तमान में {score}/100 पर है — यह एक अच्छा स्कोर है, इसलिए इसे अभी अंतराल के रूप में चिह्नित नहीं किया गया है।",
        assistantRecommendations: "आपके कौशल अंतराल के आधार पर, मैं सुझाऊंगा: {courses}।",
        assistantProgress: "आप कुल मिलाकर {score}/100 पर हैं, अपने वर्तमान शिक्षण पथ के {progress}% पर, और इस तिमाही में {hours} शिक्षण घंटे दर्ज किए गए हैं।",
        assistantAssessmentsPending: "आपके पास {count} लंबित मूल्यांकन हैं: {assessments}।",
        assistantAssessmentsNone: "अभी आपके पास कोई लंबित मूल्यांकन नहीं है — बढ़िया काम!",
        assistantFallback: "मैं अभी के लिए एक फ्रंटएंड मॉक सहायक हूं, इसलिए मैं केवल आपके मौजूदा डैशबोर्ड डेटा का उपयोग करके आपके कौशल अंतराल, सिफारिशों, प्रगति और मूल्यांकनों के बारे में प्रश्नों के उत्तर दे सकता हूं।",
        assistantTyping: "टाइप कर रहा है…",
        chipSkillGaps: "मेरे कौशल अंतराल क्या हैं?",
        chipWhyPython: "Python को अंतराल के रूप में क्यों पहचाना गया?",
        chipRecommendedCourses: "मेरे लिए कौन से कोर्स अनुशंसित हैं?",
        chipProgress: "मेरी शिक्षण प्रगति दिखाएं।",
        chipPendingAssessment: "कौन सा मूल्यांकन लंबित है?",
        journeyStepCompetency: "दक्षता",
        journeyStepSkillGap: "कौशल अंतराल",
        journeyStepLearning: "व्यक्तिगत शिक्षण",
        journeyStepAssessment: "मूल्यांकन",
        journeyStepProgress: "प्रगति",
        pipelineHeading: "आगे क्या होता है",
        pipelineCompetency: "दक्षता अपडेट हुई",
        pipelineSkillGap: "कौशल अंतराल पुनर्मूल्यांकित",
        pipelineRecommendation: "सिफारिशें ताज़ा हुईं",
        wizStepSelectContent: "सामग्री चुनें",
        wizStepConfigure: "क्विज़ कॉन्फ़िगर करें",
        wizStepGenerating: "क्विज़ बनाई जा रही है…",
        wizStepPreview: "पूर्वावलोकन और संपादन",
        wizStepPublished: "क्विज़ प्रकाशित",
        wizContentLabel: "शिक्षण सामग्री चुनें",
        wizCountLabel: "प्रश्नों की संख्या",
        wizDifficultyLabel: "कठिनाई",
        wizGenerateButton: "बनाएं",
        wizGeneratingText: "चयनित सामग्री से प्रश्न बनाए जा रहे हैं…",
        wizPreviewHint: "प्रकाशित करने से पहले जनित प्रश्नों की समीक्षा और संपादन करें।",
        wizRemoveButton: "प्रश्न हटाएं",
        wizBackButton: "← वापस",
        wizPublishButton: "क्विज़ प्रकाशित करें",
        wizPublishedText: "आपकी क्विज़ प्रकाशित हो गई है और मूल्यांकन में जोड़ी गई है।",
        wizDoneButton: "पूर्ण",
      },
      admin: {
        welcomeHeading: "स्वागत है, प्रशासक",
        totalOfficersLabel: "कुल अधिकारी",
        totalDepartmentsLabel: "कुल विभाग",
        officersAssessedLabel: "मूल्यांकित अधिकारी",
        totalCoursesLabel: "शिक्षण संसाधन / कोर्स",
        competencyOverviewHeading: "दक्षता वितरण",
        skillGapAnalyticsHeading: "समग्र कौशल अंतराल विश्लेषण",
        departmentPerformanceHeading: "विभाग प्रदर्शन",
        activityHeading: "हाल की मंच गतिविधि",
        quickActionsHeading: "त्वरित कार्य",
        officersHeading: "अधिकारी प्रबंधन",
        pendingHeading: "लंबित पंजीकरण",
        departmentsHeading: "विभाग",
        coursesHeading: "कोर्स",
        resourcesHeading: "शिक्षण संसाधन",
        recommendationsHeading: "सिफारिशें",
        assessmentsHeading: "मूल्यांकन",
        questionBankHeading: "प्रश्न बैंक",
        reportsHeading: "रिपोर्ट",
        profileHeading: "प्रोफ़ाइल",
        settingsHeading: "सेटिंग्स",
        trainingEffectivenessHeading: "प्रशिक्षण प्रभावशीलता",
        emergingSkillsHeading: "उभरती कौशल आवश्यकताएँ",
        tpacProgramsHeading: "NSSTA TPAC कार्यक्रम",
        learningActivityHeading: "शिक्षण गतिविधि",
        predictiveInsightsHeading: "भविष्य क्षमता-निर्माण अंतर्दृष्टि",
        journeyStepWorkforce: "कार्यबल दक्षता",
        journeyStepSkillGaps: "कौशल अंतराल",
        journeyStepTrainingEffectiveness: "प्रशिक्षण प्रभावशीलता",
        journeyStepEmergingSkills: "उभरते कौशल",
        journeyStepCapacityPlanning: "क्षमता योजना",
      },
      sidebar: {
        dashboard: "डैशबोर्ड",
        officers: "अधिकारी प्रबंधन",
        pending: "लंबित पंजीकरण",
        departments: "विभाग",
        competencyAnalytics: "दक्षता विश्लेषण",
        skillGapAnalytics: "कौशल अंतराल विश्लेषण",
        courses: "कोर्स",
        resources: "शिक्षण संसाधन",
        recommendations: "सिफारिशें",
        assessments: "मूल्यांकन",
        questionBank: "MCQ/प्रश्न बैंक",
        reports: "रिपोर्ट",
        profile: "प्रोफ़ाइल",
        settings: "सेटिंग्स",
        logout: "लॉगआउट",
        trainingEffectiveness: "प्रशिक्षण प्रभावशीलता",
        emergingSkills: "उभरते कौशल",
        tpacPrograms: "NSSTA TPAC कार्यक्रम",
        assessmentsGroup: "मूल्यांकन",
        questionBankGroup: "प्रश्न बैंक",
        aiAssessmentGenerator: "एआई मूल्यांकन जनरेटर",
        publishedAssessments: "प्रकाशित मूल्यांकन",
        assessmentResults: "मूल्यांकन परिणाम",
        generatedQuestions: "जनित प्रश्न",
      },
      table: {
        name: "नाम",
        id: "आईडी",
        department: "विभाग",
        designation: "पदनाम",
        status: "स्थिति",
        requestedRole: "अनुरोधित भूमिका",
        date: "तिथि",
        officers: "अधिकारी",
        avgScore: "औसत स्कोर",
        title: "शीर्षक",
        category: "श्रेणी",
        enrolled: "नामांकित",
        duration: "अवधि",
        type: "प्रकार",
        domain: "डोमेन",
        officer: "अधिकारी",
        recommended: "अनुशंसित",
        attempts: "प्रयास",
        difficulty: "कठिनाई",
        generatedOn: "पर बनाई गई",
        question: "प्रश्न",
        completionRate: "पूर्णता दर",
        scoreImprovement: "औसत स्कोर सुधार",
        demandTrend: "मांग रुझान",
        cohortSize: "समूह आकार",
        period: "अवधि",
        hoursLogged: "दर्ज घंटे",
        source: "स्रोत",
        completions: "पूर्णताएं",
      },
    },
  },
  mr: {
    nav: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      features: "वैशिष्ट्ये",
      howItWorks: "हे कसे कार्य करते",
      contact: "संपर्क",
      login: "लॉगिन",
      register: "नोंदणी",
    },
    header: {
      ministryLine1: "भारत सरकार",
      ministryLine2: "सांख्यिकी आणि कार्यक्रम",
      ministryLine3: "अंमलबजावणी मंत्रालय",
    },
    hero: {
      pill: "शिका  •  मूल्यांकन करा  •  वाढा    |    एका सशक्त सांख्यिकीय भारतासाठी",
      subheadingLine1: "एआय-सक्षम क्षमता इंटेलिजन्स",
      subheadingLine2: "आणि अनुकूल शिक्षण व्यासपीठ",
      description:
        "तुमच्या कौशल्यातील त्रुटी ओळखा, वैयक्तिकृत शिक्षण मार्ग शोधा, आणि एआय-सक्षम मूल्यांकनाद्वारे तुमची क्षमता बळकट करा.",
      ctaPrimary: "सुरू करा",
      ctaSecondary: "नोंदणी करा",
    },
    features: {
      assessSkills: "तुमच्या कौशल्यांचे मूल्यांकन करा",
      identifyGaps: "कौशल्यातील त्रुटी ओळखा",
      personalizedLearning: "वैयक्तिकृत शिक्षण मिळवा",
      aiQuizzes: "एआय-सक्षम प्रश्नमंजुषा द्या",
    },
    stats: {
      officersLabel: "सांख्यिकी अधिकारी",
      resourcesLabel: "शिक्षण संसाधने",
      domainsLabel: "क्षमता क्षेत्रे",
      aiValue: "एआय-सक्षम",
      aiLabel: "मूल्यांकन आणि शिफारसी",
    },
    collaboration: {
      heading: "सहकार्याने",
      mospiName: "MoSPI",
      mospiDesc1: "सांख्यिकी आणि कार्यक्रम",
      mospiDesc2: "अंमलबजावणी मंत्रालय, भारत सरकार",
      igotName: "iGOT कर्मयोगी",
      nsstaName: "NSSTA",
      nsstaDesc: "राष्ट्रीय सांख्यिकी प्रणाली प्रशिक्षण अकादमी",
    },
    footer: {
      about: "आमच्याबद्दल",
      features: "वैशिष्ट्ये",
      howItWorks: "हे कसे कार्य करते",
      contact: "संपर्क",
      privacy: "गोपनीयता धोरण",
      terms: "वापर अटी",
      statement: "कर्मयोगी-स्टॅटएआय | एक कुशल सांख्यिकीय भारत घडवत आहोत",
    },
    modals: {
      loginTitle: "कर्मयोगी-स्टॅटएआयमध्ये लॉगिन करा",
      loginSubtitle: "तुमच्या क्षमता डॅशबोर्डमध्ये प्रवेश करा",
      registerTitle: "तुमचे खाते तयार करा",
      registerSubtitle: "सांख्यिकीय क्षमता नेटवर्कमध्ये सामील व्हा",
      emailLabel: "ईमेल / कर्मचारी आयडी",
      passwordLabel: "पासवर्ड",
      nameLabel: "पूर्ण नाव",
      userType: "मी आहे",
      userTypeOfficer: "सांख्यिकी अधिकारी",
      userTypeAdmin: "प्रशासक",
      userTypeNew: "नवीन अधिकारी / वापरकर्ता",
      submitLogin: "लॉगिन",
      submitRegister: "खाते तयार करा",
      close: "बंद करा",
      switchToRegister: "नवीन आहात? नोंदणी करा",
      switchToLogin: "आधीच खाते आहे? लॉगिन करा",
    },
    breadcrumb: {
      home: "मुख्यपृष्ठ",
    },
    loginGateway: {
      welcome: "स्वागत आहे",
      subtitle: "व्यासपीठावर प्रवेश करण्याची पद्धत निवडा",
      backToHome: "← मुख्यपृष्ठावर परत जा",
      backToRoleSelection: "← भूमिका निवडीकडे परत जा",
      officerTitle: "सांख्यिकी अधिकारी",
      officerDescription: "वैयक्तिकृत शिक्षण, मूल्यांकनांमध्ये प्रवेश करा आणि तुमची क्षमता वाढ ट्रॅक करा.",
      officerFeatures: [
        "एआय-सक्षम मूल्यांकन द्या",
        "कौशल्यातील त्रुटी ओळखा",
        "वैयक्तिकृत शिक्षण मार्ग मिळवा",
        "तुमची प्रगती ट्रॅक करा",
      ],
      officerCta: "सांख्यिकी अधिकारी म्हणून सुरू ठेवा →",
      adminTitle: "प्रशासक",
      adminDescription: "वापरकर्ते, मूल्यांकन, शिक्षण संसाधने आणि व्यासपीठ विश्लेषणाचे व्यवस्थापन करा.",
      adminFeatures: [
        "अधिकारी खात्यांचे व्यवस्थापन करा",
        "मूल्यांकन तयार करा आणि व्यवस्थापित करा",
        "शिक्षण संसाधनांचे व्यवस्थापन करा",
        "विश्लेषण आणि अहवाल पहा",
      ],
      adminCta: "प्रशासक म्हणून सुरू ठेवा →",
      infoSecureTitle: "सुरक्षित सरकारी व्यासपीठ",
      infoSecureText: "तुमचा डेटा सुरक्षित आहे.",
      infoOfficerTitle: "सांख्यिकी अधिकाऱ्यांसाठी",
      infoOfficerText: "कौशल्ये तयार करा. व्यावसायिकदृष्ट्या वाढा.",
      infoIndiaTitle: "डेटा-आधारित भारताच्या दिशेने",
      infoIndiaText: "उज्ज्वल उद्यासाठी सांख्यिकीय क्षमता बळकट करणे.",
      officerFormTitle: "सांख्यिकी अधिकारी लॉगिन",
      officerFormSubtitle: "तुमची क्षमता, मूल्यांकन आणि वैयक्तिकृत शिक्षणात प्रवेश करण्यासाठी साइन इन करा.",
      adminFormTitle: "प्रशासक लॉगिन",
      adminFormSubtitle: "क्षमता, मूल्यांकन, शिक्षण संसाधने, अधिकारी आणि व्यासपीठ विश्लेषणाचे व्यवस्थापन करण्यासाठी साइन इन करा.",
      adminIdLabel: "अधिकृत अ‍ॅडमिन आयडी / ईमेल *",
      forgotPassword: "पासवर्ड विसरलात?",
      newUserRegister: "नवीन वापरकर्ता? नोंदणी करा",
      breadcrumbLogin: "लॉगिन",
      breadcrumbOfficer: "सांख्यिकी अधिकारी",
      breadcrumbAdmin: "प्रशासक",
      assessTitle: "मूल्यांकन",
      assessText: "एआय-सक्षम मूल्यांकनांसह तुमच्या क्षमतांचे मूल्यांकन करा.",
      learnTitle: "शिका",
      learnText: "तुमच्या भूमिकेनुसार वैयक्तिकृत शिक्षण संसाधने मिळवा.",
      growTitle: "वाढा",
      growText: "तुमची प्रगती ट्रॅक करा आणि तुमचा प्रभाव मजबूत करा.",
      officerEmailLabel: "अधिकृत ईमेल / अधिकारी आयडी *",
      officerEmailPlaceholder: "तुमचा अधिकृत ईमेल किंवा अधिकारी आयडी टाका",
      passwordLabelRequired: "पासवर्ड *",
      passwordPlaceholder: "तुमचा पासवर्ड टाका",
      adminEmailPlaceholder: "तुमचा प्रशासक आयडी किंवा ईमेल टाका",
      rememberMe: "मला लक्षात ठेवा",
      newUserQuestion: "कर्मयोगी-स्टॅटएआयमध्ये नवीन आहात?",
      registerAsOfficer: "सांख्यिकी अधिकारी म्हणून नोंदणी करा",
      registerAsAdmin: "प्रशासक म्हणून नोंदणी करा",
      secureOfficerTitle: "सुरक्षित सरकारी व्यासपीठ",
      secureOfficerText: "तुमचे क्रेडेंशियल आणि शिक्षण डेटा सुरक्षित आहेत.",
      secureAdminTitle: "सुरक्षित प्रशासक प्रवेश",
      secureAdminText: "केवळ अधिकृत कर्मचारी. प्रशासकीय प्रवेश सुरक्षित प्रमाणीकरणाद्वारे संरक्षित आहे.",
    },
    registerGateway: {
      heading: "तुमचे कर्मयोगी-स्टॅटएआय खाते तयार करा",
      subtitle: "सुरू ठेवण्यासाठी तुमची भूमिका निवडा.",
      officerTitle: "सांख्यिकी अधिकारी",
      officerDescription: "क्षमतांचे मूल्यांकन करण्यासाठी, कौशल्यातील त्रुटी ओळखण्यासाठी, शिकण्यासाठी आणि तुमची प्रगती ट्रॅक करण्यासाठी खाते तयार करा.",
      officerFeatures: [
        "एआय-सक्षम मूल्यांकन द्या",
        "वैयक्तिकृत शिक्षण मार्ग मिळवा",
        "शिक्षण संसाधनांमध्ये प्रवेश करा",
        "तुमची वाढ ट्रॅक करा",
      ],
      officerCta: "सांख्यिकी अधिकारी म्हणून सुरू ठेवा →",
      adminTitle: "प्रशासक",
      adminDescription: "व्यासपीठ, अधिकारी, मूल्यांकन आणि विश्लेषणाचे व्यवस्थापन करण्यासाठी अधिकृत कर्मचाऱ्यांसाठी खाते तयार करा.",
      adminFeatures: [
        "अधिकारी खात्यांचे व्यवस्थापन करा",
        "मूल्यांकन तयार करा आणि व्यवस्थापित करा",
        "शिक्षण संसाधनांचे व्यवस्थापन करा",
        "व्यासपीठ विश्लेषण पहा",
      ],
      adminCta: "प्रशासक म्हणून सुरू ठेवा →",
      alreadyHaveAccount: "आधीच खाते आहे?",
      loginLink: "लॉगिन",
      backToRegisterSelection: "← नोंदणी निवडीकडे परत जा",
    },
    registerForm: {
      officerFormTitle: "सांख्यिकी अधिकारी नोंदणी",
      officerFormSubtitle: "तुमच्या क्षमतांचे मूल्यांकन आणि निर्माण सुरू करण्यासाठी तुमचे खाते तयार करा.",
      adminFormTitle: "प्रशासक नोंदणी",
      adminFormSubtitle: "कर्मयोगी-स्टॅटएआय व्यासपीठाचे व्यवस्थापन करण्यासाठी प्रशासक खाते तयार करा.",
      fullNameLabel: "पूर्ण नाव *",
      fullNamePlaceholder: "तुमचे पूर्ण नाव टाका",
      officerIdLabel: "कर्मचारी / अधिकारी आयडी *",
      officerIdPlaceholder: "तुमचा कर्मचारी किंवा अधिकारी आयडी टाका",
      adminIdLabel: "प्रशासक आयडी *",
      adminIdPlaceholder: "तुमचा प्रशासक आयडी टाका",
      emailLabel: "ईमेल पत्ता *",
      emailPlaceholder: "तुमचा ईमेल पत्ता टाका",
      mobileLabel: "मोबाइल नंबर *",
      mobilePlaceholder: "तुमचा 10-अंकी मोबाइल नंबर टाका",
      officerDepartmentLabel: "विभाग *",
      adminDepartmentLabel: "विभाग / संस्था *",
      departmentPlaceholder: "तुमचा विभाग टाका",
      designationLabel: "पदनाम *",
      designationPlaceholder: "तुमचे पदनाम टाका",
      stateLabel: "राज्य *",
      statePlaceholder: "तुमचे राज्य टाका",
      districtLabel: "जिल्हा *",
      districtPlaceholder: "तुमचा जिल्हा टाका",
      confirmPasswordLabel: "पासवर्डची पुष्टी करा *",
      confirmPasswordPlaceholder: "तुमचा पासवर्ड पुन्हा टाका",
      termsText: "मी वापर अटी आणि गोपनीयता धोरणाशी सहमत आहे *",
      registerButton: "नोंदणी करा",
      successTitle: "नोंदणी यशस्वी",
      successText: "तुमच्या खात्याची विनंती नोंदवली गेली आहे. मंजुरीनंतर तुम्ही साइन इन करू शकता.",
      backToHomeAfterSuccess: "← मुख्यपृष्ठावर परत जा",
    },
    validation: {
      requiredFields: "कृपया सर्व आवश्यक फील्ड भरा.",
      passwordMismatch: "पासवर्ड जुळत नाहीत.",
      termsRequired: "सुरू ठेवण्यासाठी कृपया वापर अटी आणि गोपनीयता धोरण स्वीकारा.",
      invalidEmail: "कृपया वैध ईमेल पत्ता टाका.",
      invalidMobile: "कृपया वैध 10-अंकी मोबाइल नंबर टाका.",
      otpIncomplete: "कृपया संपूर्ण 6-अंकी OTP टाका.",
      otpIncorrect: "तुम्ही टाकलेला OTP चुकीचा आहे. कृपया पुन्हा प्रयत्न करा.",
    },
    sidePanel: {
      words: ["डेटा", "लोक", "धोरण", "प्रभाव"],
      headline: "एका सशक्त सांख्यिकीय भारतासाठी",
      assessTitle: "मूल्यांकन",
      assessText: "एआय-सक्षम मूल्यांकनांसह तुमच्या क्षमतांचे मूल्यांकन करा.",
      learnTitle: "शिका",
      learnText: "तुमच्या भूमिकेनुसार वैयक्तिकृत संसाधने मिळवा.",
      growTitle: "वाढा",
      growText: "तुमची प्रगती ट्रॅक करा आणि तुमचा प्रभाव मजबूत करा.",
      manageTitle: "व्यवस्थापन करा",
      manageText: "व्यासपीठ वापरकर्ते, मूल्यांकन आणि संसाधनांची देखरेख करा.",
      monitorTitle: "निरीक्षण करा",
      monitorText: "क्षमता वाढ आणि व्यासपीठ विश्लेषण ट्रॅक करा.",
      strengthenTitle: "बळकट करा",
      strengthenText: "कुशल आणि डेटा-आधारित कार्यबल सक्षम करा.",
    },
    officerWizard: {
      heading: "सांख्यिकी अधिकारी खाते तयार करा",
      subtitle: "तुमच्या क्षमतांचे मूल्यांकन करण्यासाठी, कौशल्यातील त्रुटी ओळखण्यासाठी आणि तुमचा शिक्षण प्रवास ट्रॅक करण्यासाठी कर्मयोगी-स्टॅटएआयमध्ये सामील व्हा.",
      steps: ["मूलभूत माहिती", "व्यावसायिक तपशील", "पासवर्ड तयार करा", "पडताळणी"],
      backButton: "← मागे",
      nextButton: "पुढे →",
      step1Heading: "मूलभूत माहिती",
      step1Subtitle: "तुमचे खाते तयार करण्यासाठी कृपया तुमचा मूलभूत तपशील द्या.",
      officialEmailLabel: "अधिकृत ईमेल *",
      officialEmailPlaceholder: "तुमचा अधिकृत ईमेल टाका",
      officerMobilePlaceholder: "तुमचा मोबाइल नंबर टाका",
      officerIdLabel: "अधिकारी आयडी / कर्मचारी आयडी *",
      officerIdPlaceholder: "तुमचा अधिकारी आयडी टाका",
      departmentLabel: "विभाग / संस्था *",
      departmentPlaceholder: "विभाग निवडा",
      designationLabel: "पदनाम *",
      designationPlaceholder: "पदनाम निवडा",
      stateLabel: "राज्य / केंद्रशासित प्रदेश *",
      statePlaceholder: "राज्य / केंद्रशासित प्रदेश निवडा",
      languageLabel: "प्राधान्य भाषा *",
      step2Heading: "व्यावसायिक तपशील",
      step2Subtitle: "तुमच्या सध्याच्या भूमिकेबद्दल आणि व्यावसायिक अनुभवाबद्दल आम्हाला सांगा.",
      experienceLabel: "अनुभवाची वर्षे *",
      experiencePlaceholder: "अनुभवाची वर्षे निवडा",
      roleLabel: "सध्याची भूमिका / कार्य *",
      rolePlaceholder: "तुमची सध्याची भूमिका निवडा",
      domainLabel: "सांख्यिकीय क्षेत्र / डोमेन *",
      domainPlaceholder: "सांख्यिकीय डोमेन निवडा",
      skillsHeading: "सध्याची कौशल्य क्षेत्रे",
      skillsSubtitle: "तुमच्या भूमिकेशी संबंधित सर्व कौशल्ये निवडा (तुम्ही नंतर बदलू शकता).",
      skillOptions: [
        "डेटा विश्लेषण",
        "सांख्यिकीय पद्धती",
        "डेटा व्हिज्युअलायझेशन",
        "SQL",
        "पायथन",
        "R",
        "मशीन लर्निंग",
        "डेटाबेस व्यवस्थापन",
        "सर्वेक्षण पद्धती",
        "डेटा गुणवत्ता",
        "अहवाल निर्मिती",
      ],
      responsibilitiesLabel: "प्राथमिक कामाच्या जबाबदाऱ्या",
      responsibilitiesPlaceholder: "तुमच्या प्राथमिक कामाच्या जबाबदाऱ्यांचे वर्णन करा",
      step3Heading: "पासवर्ड तयार करा",
      step3Subtitle: "तुमच्या कर्मयोगी-स्टॅटएआय खात्यासाठी एक सुरक्षित पासवर्ड तयार करा.",
      createAccountButton: "पुढे →",
      passwordRequirements: [
        "किमान 8 अक्षरे",
        "एक मोठे अक्षर",
        "एक लहान अक्षर",
        "एक अंक",
        "एक विशेष चिन्ह",
      ],
      passwordStrengthLabel: "पासवर्ड ताकद",
      step4Heading: "तुमचे खाते सत्यापित करा",
      step4Text: "आम्ही तुमच्या नोंदणीकृत ईमेलवर एक सत्यापन कोड पाठवला आहे.",
      changeLink: "बदला",
      resendQuestion: "OTP मिळाला नाही?",
      resendButton: "कोड पुन्हा पाठवा",
      otpInfo: "कृपया सत्यापन कोडसाठी तुमचा इनबॉक्स (आणि स्पॅम फोल्डर) तपासा. हा फ्रंटएंड प्रोटोटाइपसाठी एक मॉक सत्यापन प्रवाह आहे — कोणताही खरा ईमेल पाठवला गेलेला नाही.",
      verifyButton: "सत्यापित करा आणि खाते तयार करा",
      successHeading: "खाते यशस्वीरित्या तयार झाले",
      successText: "तुमचे कर्मयोगी-स्टॅटएआय खाते यशस्वीरित्या तयार झाले आहे.",
      confirmationSentTo: "पुष्टीकरण ईमेल पाठवला गेला आहे",
      checkInboxText: "पुढील सूचनांसाठी कृपया तुमचा इनबॉक्स (आणि स्पॅम फोल्डर) तपासा.",
      goToLoginButton: "लॉगिनवर जा →",
      goToDashboardButton: "डॅशबोर्डवर जा →",
    },
    adminWizard: {
      heading: "प्रशासक खाते तयार करा",
      subtitle: "कर्मयोगी-स्टॅटएआय व्यासपीठाचे व्यवस्थापन करण्यासाठी अधिकृत प्रशासक म्हणून नोंदणी करा.",
      steps: ["मूलभूत माहिती", "व्यावसायिक तपशील", "पासवर्ड तयार करा", "पडताळणी"],
      step1Heading: "मूलभूत माहिती",
      step1Subtitle: "तुमचे प्रशासक खाते तयार करण्यासाठी कृपया तुमचा अधिकृत तपशील द्या.",
      employeeIdLabel: "अधिकृत कर्मचारी आयडी *",
      employeeIdPlaceholder: "तुमचा अधिकृत कर्मचारी आयडी टाका",
      officialContactLabel: "अधिकृत संपर्क क्रमांक *",
      officialContactPlaceholder: "तुमचा अधिकृत संपर्क क्रमांक टाका",
      departmentLabel: "विभाग / संस्था *",
      departmentPlaceholder: "तुमचा विभाग किंवा संस्था टाका",
      designationLabel: "पदनाम *",
      designationPlaceholder: "तुमचे पदनाम टाका",
      step2Heading: "व्यावसायिक तपशील",
      step2Subtitle: "तुमच्या प्रशासकीय भूमिकेबद्दल आणि जबाबदाऱ्यांबद्दल माहिती द्या.",
      adminRoleLabel: "प्रशासकीय भूमिका *",
      adminRolePlaceholder: "तुमची प्रशासकीय भूमिका निवडा",
      yearsOfServiceLabel: "सेवेची वर्षे *",
      yearsOfServicePlaceholder: "सेवेची वर्षे निवडा",
      areaOfResponsibilityLabel: "जबाबदारीचे क्षेत्र *",
      areaOfResponsibilityPlaceholder: "जबाबदारीचे क्षेत्र निवडा",
      accessTypeLabel: "प्रशासक प्रवेश प्रकार *",
      accessTypePlaceholder: "प्रवेश प्रकार निवडा",
      accessTypeOptions: [
        "व्यासपीठ प्रशासक",
        "विभाग प्रशासक",
        "मूल्यांकन प्रशासक",
        "शिक्षण संसाधन प्रशासक",
      ],
      authDetailsLabel: "अधिकृतता / संदर्भ तपशील *",
      authDetailsPlaceholder: "वरिष्ठ अधिकाऱ्याकडून अधिकृतता तपशील किंवा संदर्भ टाका",
      authDetailsMax: 300,
      reasonLabel: "प्रशासकीय प्रवेशाची विनंती करण्याचे कारण *",
      reasonPlaceholder: "कृपया प्रशासक प्रवेशाची विनंती करण्याचा उद्देश वर्णन करा",
      reasonMax: 500,
      step3Heading: "पासवर्ड तयार करा",
      step3Subtitle: "तुमच्या कर्मयोगी-स्टॅटएआय प्रशासक खात्यासाठी एक सुरक्षित पासवर्ड तयार करा.",
      step4Heading: "तुमचे खाते सत्यापित करा",
      step4Description: "तुमची प्रशासक नोंदणी पूर्ण करण्यासाठी तुमचा अधिकृत ईमेल पत्ता सत्यापित करा.",
      step4Text: "आम्ही एक सत्यापन कोड पाठवला आहे",
      verifyButton: "सत्यापित करा आणि विनंती सबमिट करा",
      requestSubmittedHeading: "प्रशासक प्रवेश विनंती सबमिट केली",
      requestSubmittedText: "तुमची प्रशासक प्रवेश विनंती यशस्वीरित्या सबमिट केली गेली आहे. तिचे पुनरावलोकन अधिकृत प्रशासकाद्वारे केले जाईल.",
      pendingApprovalLabel: "मंजुरी प्रलंबित",
      goToLoginButton: "लॉगिनवर जा →",
      goToDashboardButton: "डॅशबोर्डवर जा →",
    },
    aboutPage: {
      heroTitle: "कर्मयोगी-स्टॅटएआय बद्दल",
      heroDescription:
        "कर्मयोगी-स्टॅटएआय हे एक एआय-सक्षम क्षमता इंटेलिजन्स आणि अनुकूल शिक्षण व्यासपीठ आहे, जे सांख्यिकी आणि कार्यक्रम अंमलबजावणी मंत्रालय (MoSPI), भारत सरकार अंतर्गत सांख्यिकीय परिसंस्थेसाठी विकसित करण्यात आले आहे.",
      overviewHeading: "आढावा",
      overviewText:
        "कर्मयोगी-स्टॅटएआयचे उद्दिष्ट सांख्यिकी अधिकारी आणि व्यावसायिकांची क्षमता एका संरचित, डेटा-आधारित आणि वैयक्तिकृत शिक्षण अनुभवाद्वारे बळकट करणे आहे. हे व्यासपीठ वापरकर्त्यांना त्यांच्या सध्याच्या कौशल्यांचे मूल्यांकन करण्यास, क्षमतेतील त्रुटी ओळखण्यास, क्युरेट केलेल्या शिक्षण संसाधनांमध्ये प्रवेश करण्यास आणि एआय-सक्षम मूल्यांकन व शिफारसींद्वारे त्यांची प्रगती ट्रॅक करण्यास सक्षम करते.",
      objectivesHeading: "मुख्य उद्दिष्टे",
      objectives: [
        "सांख्यिकी अधिकाऱ्यांची क्षमता बळकट करणे",
        "वैयक्तिकृत आणि अनुकूल शिक्षणास सक्षम करणे",
        "सतत व्यावसायिक विकासाला पाठिंबा देणे",
        "कुशल आणि भविष्यासाठी सज्ज सांख्यिकीय परिसंस्था तयार करणे",
      ],
      cardWhoTitle: "हे कोण वापरू शकते?",
      cardWhoText:
        "भारत सरकारच्या सांख्यिकीय परिसंस्थेतील सांख्यिकी अधिकारी, प्रशासक आणि नवीन अधिकारी किंवा वापरकर्ते.",
      cardWhatTitle: "हे काय करते",
      cardWhatText:
        "क्षमतांचे मूल्यांकन करते, कौशल्यातील त्रुटी ओळखते, आणि वैयक्तिकृत, एआय-सक्षम शिक्षण मार्गांची शिफारस करते.",
      cardWhyTitle: "हे का महत्त्वाचे आहे",
      cardWhyText:
        "अचूक डेटा, सुदृढ धोरण-निर्मिती आणि मजबूत डिजिटल भारतासाठी कुशल सांख्यिकीय कार्यबल आवश्यक आहे.",
      cardHowTitle: "हे कसे समर्थन देते",
      cardHowText:
        "अनुकूल प्रश्नमंजुषा, क्युरेट केलेली संसाधने आणि सतत व्यावसायिक वाढीस मार्गदर्शन करणाऱ्या प्रगती ट्रॅकरद्वारे.",
      initiativeHeading: "या उपक्रमाबद्दल",
      initiativeText:
        "MoSPI, iGOT कर्मयोगी आणि NSSTA यांच्या सहकार्याने विकसित, हा उपक्रम एका मजबूत सांख्यिकीय भारतासाठी भविष्यासाठी सज्ज सांख्यिकीय कार्यबल तयार करण्यासाठी संस्थात्मक तज्ञता आणि आधुनिक एआय एकत्र आणतो.",
    },
    featuresPage: {
      heroTitle: "व्यासपीठाची वैशिष्ट्ये",
      heroSubtitle:
        "मजबूत सांख्यिकीय परिसंस्थेसाठी मूल्यांकन, शिकणे, वाढणे आणि क्षमता ट्रॅक करण्यासाठी एआय-सक्षम साधनांचा व्यापक संच.",
      cards: [
        {
          title: "क्षमता मूल्यांकन",
          description: "डोमेन ज्ञान, विश्लेषणात्मक कौशल्ये आणि भूमिका-विशिष्ट क्षमतांचे मूल्यांकन करण्यासाठी एआय-सक्षम मूल्यांकन.",
          bullets: ["भूमिका-आधारित मूल्यांकन", "अनुकूल प्रश्न संच", "त्वरित कामगिरी विश्लेषण"],
        },
        {
          title: "एआय कौशल्य-त्रुटी विश्लेषण",
          description: "भूमिका आणि डोमेन अपेक्षांनुसार तुमची क्षमता नेमकी कुठे कमी पडते हे ओळखा.",
          bullets: ["वैयक्तिकृत त्रुटी विश्लेषण", "डोमेन-वार अंतर्दृष्टी", "डेटा-आधारित शिफारसी"],
        },
        {
          title: "वैयक्तिकृत शिक्षण",
          description: "तुमची भूमिका, सध्याची कौशल्य पातळी आणि करिअर उद्दिष्टांनुसार शिक्षण मार्ग.",
          bullets: ["सानुकूलित शिक्षण मार्ग", "क्युरेट केलेली शिक्षण संसाधने", "स्वतःच्या गतीने शिक्षण"],
        },
        {
          title: "एआय-सक्षम प्रश्नमंजुषा",
          description: "तुमच्या कामगिरीनुसार रिअल टाइममध्ये अनुकूल होणाऱ्या प्रश्नमंजुषांसह तुमचे ज्ञान बळकट करा.",
          bullets: ["विषय-वार प्रश्नमंजुषा", "अनुकूल अडचण पातळी", "त्वरित अभिप्राय आणि उपाय"],
        },
        {
          title: "प्रगती ट्रॅकर",
          description: "एक व्हिज्युअल डॅशबोर्ड जो तुमची क्षमता कालांतराने कशी वाढत आहे हे दाखवतो.",
          bullets: ["व्हिज्युअल प्रगती डॅशबोर्ड", "क्षमता-वार वाढ", "बॅज आणि उपलब्धी"],
        },
        {
          title: "शिक्षण संसाधने",
          description: "सांख्यिकी, डेटा अॅनालिटिक्स, जीआयएस आणि एआय/एमएल समाविष्ट असलेली क्युरेट केलेली संसाधन लायब्ररी.",
          bullets: ["ई-लर्निंग मॉड्यूल्स", "लेख, अहवाल आणि केस स्टडीज", "मल्टीमीडिया सामग्री"],
        },
        {
          title: "भूमिका-आधारित शिक्षण मार्ग",
          description: "प्रत्येक भूमिकेला आवश्यक असलेल्या विशिष्ट क्षमतांभोवती संरचित शिक्षण प्रवास.",
          bullets: ["भूमिका-विशिष्ट क्षमता", "संरचित शिक्षण मार्ग", "संबंधित मूल्यांकन"],
        },
        {
          title: "प्रमाणपत्र आणि मान्यता",
          description: "शिक्षण टप्पे पूर्ण केल्यावर मान्यताप्राप्त, ट्रॅक करण्यायोग्य श्रेयांक मिळवा.",
          bullets: ["डिजिटल प्रमाणपत्रे", "ट्रॅक करण्यायोग्य श्रेयांक", "परिसंस्थेमध्ये मान्यता"],
        },
      ],
      integratedHeading1: "सतत शिक्षणासाठी",
      integratedHeading2: "एक एकात्मिक व्यासपीठ",
      process: [
        "तुमच्या कौशल्यांचे मूल्यांकन करा",
        "कौशल्यातील त्रुटी ओळखा",
        "वैयक्तिकृत शिक्षण मिळवा",
        "तुमच्या गतीने शिका",
        "तुमची प्रगती ट्रॅक करा",
        "प्रमाणपत्र मिळवा",
      ],
    },
    howItWorksPage: {
      heroTitle: "हे कसे कार्य करते",
      heroSubtitle:
        "सांख्यिकी अधिकाऱ्यांना मूल्यांकन, शिकण्यास आणि वाढण्यास मदत करण्यासाठी एक सोपा, संरचित आणि बुद्धिमान शिक्षण प्रवास — एआयद्वारे समर्थित.",
      quickSteps: [
        { title: "नोंदणी करा", desc: "सुरुवात करण्यासाठी तुमचे खाते तयार करा" },
        { title: "मूल्यांकन करा", desc: "एआय-सक्षम मूल्यांकन द्या" },
        { title: "कौशल्यातील त्रुटी ओळखा", desc: "वैयक्तिकृत अंतर्दृष्टी मिळवा" },
        { title: "शिक्षण मार्ग मिळवा", desc: "सानुकूलित शिक्षण शिफारसी मिळवा" },
        { title: "शिका", desc: "क्युरेट केलेल्या शिक्षण संसाधनांमध्ये प्रवेश करा" },
        { title: "पुन्हा-मूल्यांकन करा", desc: "तुमच्या सुधारणेचे मूल्यांकन करा" },
        { title: "प्रगती ट्रॅक करा", desc: "उपलब्धींचे निरीक्षण करा आणि प्रमाणपत्रे मिळवा" },
      ],
      stepByStepHeading: "टप्प्याटप्प्याने प्रक्रिया",
      cycleHeading: "एक सतत शिक्षण चक्र",
      cycleSteps: ["मूल्यांकन करा", "शिका", "वाढा"],
      cycleFooter: "एका सशक्त सांख्यिकीय भारतासाठी",
    },
    contactPage: {
      heroTitle: "संपर्क साधा",
      heroDescription:
        "आम्ही मदतीसाठी येथे आहोत. कर्मयोगी-स्टॅटएआयशी संबंधित सहाय्य, प्रश्न, अभिप्राय किंवा सहकार्याच्या संधींसाठी आमच्याशी संपर्क साधा.",
      emailTitle: "ईमेल सहाय्य",
      emailDesc: "सामान्य प्रश्न, सहाय्य आणि अभिप्रायासाठी",
      emailValue: "karmayogi-statai@mospi.gov.in",
      helpdeskTitle: "हेल्पडेस्क",
      helpdeskDesc: "आमच्या सहाय्य टीमशी बोला",
      helpdeskHours: "(सोम – शुक्र, सकाळी 9:30 – सायंकाळी 6:00)",
      helpdeskValue: "011-23368809",
      addressTitle: "कार्यालयाचा पत्ता",
      addressLine1: "सांख्यिकी आणि कार्यक्रम अंमलबजावणी मंत्रालय",
      addressLine2: "नवी दिल्ली – 110001",
      hoursTitle: "सहाय्य वेळ",
      hoursLine1: "सोमवार – शुक्रवार",
      hoursLine2: "सकाळी 9:30 – सायंकाळी 6:00",
      hoursLine3: "(सरकारी सुट्ट्या वगळता)",
      formHeading: "आम्हाला संदेश पाठवा",
      fieldName: "पूर्ण नाव *",
      fieldEmail: "ईमेल पत्ता *",
      fieldUserType: "वापरकर्ता प्रकार *",
      fieldSubject: "विषय *",
      fieldMessage: "संदेश *",
      submitButton: "संदेश पाठवा",
      faqHeading: "वारंवार विचारले जाणारे प्रश्न",
      faqs: [
        {
          q: "मी कर्मयोगी-स्टॅटएआयवर नोंदणी कशी करू?",
          a: "हेडरमधील नोंदणी बटणावर क्लिक करा, तुमचा वापरकर्ता प्रकार निवडा, आणि छोटा साइन-अप फॉर्म पूर्ण करा.",
        },
        {
          q: "हे व्यासपीठ कोण वापरू शकते?",
          a: "भारत सरकारच्या सांख्यिकीय परिसंस्थेतील सांख्यिकी अधिकारी, प्रशासक आणि नवीन अधिकारी किंवा वापरकर्ते.",
        },
        {
          q: "कोणत्या प्रकारचे मूल्यांकन उपलब्ध आहेत?",
          a: "डोमेन ज्ञान, विश्लेषणात्मक कौशल्ये आणि भूमिका-विशिष्ट क्षमता समाविष्ट असलेले भूमिका-आधारित, अनुकूल एआय-सक्षम मूल्यांकन.",
        },
        {
          q: "मी शिक्षण संसाधनांमध्ये प्रवेश कसा करू?",
          a: "लॉगिन केल्यानंतर, तुमच्या मूल्यांकन निकालांवर आणि भूमिकेवर आधारित तुमच्या डॅशबोर्डवर क्युरेट केलेली संसाधने शिफारस केली जातात.",
        },
        {
          q: "पूर्ण केल्यावर मला प्रमाणपत्र मिळेल का?",
          a: "होय, पात्र शिक्षण मार्ग पूर्ण केल्यावर डिजिटल प्रमाणपत्रे आणि ट्रॅक करण्यायोग्य श्रेयांक दिले जातात.",
        },
        {
          q: "मला तांत्रिक सहाय्य कसे मिळू शकते?",
          a: "karmayogi-statai@mospi.gov.in वर ईमेल करा किंवा वर सूचीबद्ध केलेल्या सहाय्य वेळेत हेल्पडेस्कवर कॉल करा.",
        },
      ],
      officeHeading: "आमचे कार्यालय स्थान",
      officeText:
        "सांख्यिकी आणि कार्यक्रम अंमलबजावणी मंत्रालय, सरदार पटेल भवन, संसद मार्ग, नवी दिल्ली – 110001",
    },
    dashboard: {
      officer: {
        welcomeBack: "पुन्हा स्वागत आहे,",
        overallScoreLabel: "एकूण क्षमता गुण",
        startAnalysisButton: "एआय क्षमता मूल्यांकन सुरू करा",
        competencyOverviewHeading: "क्षमता आढावा",
        skillGapsHeading: "आढळलेल्या कौशल्य त्रुटी",
        recommendationsHeading: "वैयक्तिकृत शिफारसी",
        learningPathHeading: "सध्याचा शिक्षण मार्ग",
        courseProgressHeading: "कोर्स प्रगती",
        assessmentsHeading: "आगामी मूल्यांकन",
        activityHeading: "अलीकडील क्रियाकलाप",
        quickLinksHeading: "त्वरित प्रवेश",
        startAssessmentButton: "सुरू करा",
        modalTitle: "एआय क्षमता मूल्यांकन",
        modalSubtitle: "तुमचे शिक्षण वैयक्तिकृत करण्यासाठी काही त्वरित प्रश्न",
        modalNextButton: "पुढे",
        modalFinishButton: "माझे निकाल पहा",
        modalResultHeading: "आम्हाला हे आढळले",
        modalResultText: "तुमच्या उत्तरांवर आधारित, पुढे लक्ष केंद्रित करण्याचे मुख्य क्षेत्र ही आहेत.",
        modalViewGapsButton: "माझ्या कौशल्य त्रुटी पहा",
        overviewTabLabel: "आढावा",
        profileTabLabel: "क्षमता प्रोफाइल",
        assessmentsTabLabel: "मूल्यांकन आणि क्विझ",
        resourcesTabLabel: "शिक्षण संसाधने",
        learningHoursLabel: "शिक्षण तास (या तिमाहीत)",
        overallProgressLabel: "एकूण शिक्षण मार्ग प्रगती",
        aiAssistantHeading: "एआय सहाय्यक",
        aiAssistantAccessText: "तुमच्या क्षमता, शिफारसी किंवा मूल्यांकनांबद्दल विचारा.",
        aiAssistantTitle: "कर्मयोगी एआय सहाय्यक",
        aiAssistantPlaceholder: "प्रश्न टाइप करा…",
        aiAssistantGreeting: "नमस्कार! मी तुमचा एआय सहाय्यक आहे (मॉक पूर्वावलोकन). माझ्याकडे तुमच्या कौशल्य त्रुटी, शिफारसी, प्रगती किंवा मूल्यांकनांबद्दल विचारा.",
        aiAssistantLauncherLabel: "एआय सहाय्यक उघडा",
        designationLabel: "पदनाम",
        departmentLabel: "विभाग",
        jobRoleLabel: "नोकरी भूमिका",
        currentAssignmentLabel: "सध्याची नियुक्ती",
        qualificationsLabel: "शैक्षणिक पात्रता",
        experienceLabel: "कामाचा अनुभव",
        previousTrainingLabel: "मागील प्रशिक्षण",
        takeAssessmentButton: "मूल्यांकन घ्या",
        generateQuizButton: "कोर्समधून सराव क्विझ तयार करा",
        aiGeneratedQuizTitle: "एआय-निर्मित सराव क्विझ",
        quizCheckAnswerButton: "उत्तर तपासा",
        quizNextButton: "पुढे",
        quizFinishButton: "समाप्त करा",
        quizCorrectFeedback: "बरोबर!",
        quizIncorrectFeedback: "बरोबर नाही — या विषयाचे पुनरावलोकन करा.",
        quizScoreLabel: "तुमचा गुण",
        quizDoneButton: "पूर्ण",
        quizGeneratedBadge: "अपलोड केलेल्या कोर्स सामग्रीवरून तयार",
        catalogueHeading: "कोर्स यादी",
        skillGapsTabLabel: "कौशल्य त्रुटी आणि शिफारसी",
        learningTabLabel: "शिक्षण",
        progressTabLabel: "प्रगती",
        settingsTabLabel: "सेटिंग्ज",
        statusCompleted: "पूर्ण",
        statusInProgress: "प्रगतीपथावर",
        statusUpcoming: "आगामी",
        severityHigh: "उच्च",
        severityMedium: "मध्यम",
        severityLow: "कमी",
        hoursUnit: "तास",
        qaSkillGapAnalysis: "कौशल्य त्रुटी विश्लेषण",
        qaSkillGapsRecommendations: "कौशल्य त्रुटी आणि शिफारसी",
        qaLearningResources: "शिक्षण संसाधने",
        qaAssessmentCentre: "मूल्यांकन केंद्र",
        qaMyProgress: "माझी प्रगती",
        aiQuizCardSubtitle: "सामग्री अपलोड/निवडा, संख्या आणि अडचण निवडा, तयार करा, पूर्वावलोकन/संपादन करा, नंतर प्रकाशित करा.",
        aiQuizNoneYetText: "अद्याप कोणतीही एआय-निर्मित क्विझ प्रकाशित झालेली नाही.",
        aiQuizPublishedCountText: "आतापर्यंत {count} एआय-निर्मित क्विझ प्रकाशित झाल्या आहेत.",
        recommendationsConnectText: "या शिफारसी वर ओळखलेल्या कौशल्य त्रुटींना थेट संबोधित करतात.",
        progressIntroText: "तुमचे शिक्षण कालांतराने कसे प्रगती करत आहे यावर एक जवळून दृष्टिक्षेप.",
        settingsSectionProfile: "प्रोफाइल / वैयक्तिक माहिती",
        settingsSectionSecurity: "खाते आणि सुरक्षा",
        settingsChangePasswordLabel: "पासवर्ड",
        settingsChangePasswordAction: "पासवर्ड बदला",
        settingsSectionLanguage: "भाषा",
        settingsSectionNotifications: "सूचना",
        settingsEmailNotifications: "ईमेल सूचना",
        settingsAssessmentReminders: "मूल्यांकन स्मरणपत्रे",
        settingsTrainingAlerts: "प्रशिक्षण / पूर्णता सूचना",
        settingsSkillGapAlerts: "कौशल्य-त्रुटी सूचना",
        settingsSectionAccessibility: "सुलभता",
        settingsHighContrast: "उच्च-कॉन्ट्रास्ट मोड",
        settingsFontSize: "फॉन्ट आकार",
        settingsScreenReaderHints: "स्क्रीन-रीडर अनुकूल संकेत",
        settingsKeyboardNavHints: "कीबोर्ड नेव्हिगेशन संकेत",
        settingsSectionPrivacy: "गोपनीयता",
        settingsDataSharingConsent: "वैयक्तिकृत शिफारसींसाठी माझा डेटा वापरण्याची परवानगी द्या",
        settingsSectionHelp: "मदत आणि समर्थन",
        settingsHelpCenter: "मदत केंद्र",
        settingsUserGuide: "वापरकर्ता मार्गदर्शक",
        settingsFaqs: "वारंवार विचारले जाणारे प्रश्न",
        settingsContactSupport: "समर्थनाशी संपर्क साधा",
        settingsReportIssue: "समस्या नोंदवा",
        settingsFeedback: "अभिप्राय",
        settingsSectionAbout: "याबद्दल / पोर्टल माहिती",
        settingsAboutPlatform: "कर्मयोगी-स्टॅटएआय बद्दल",
        settingsInitiativeInfo: "सांख्यिकी आणि कार्यक्रम अंमलबजावणी मंत्रालय (MoSPI), iGOT कर्मयोगी आणि NSSTA यांच्या सहकार्याने",
        settingsCopyright: "© 2026 भारत सरकार (प्लेसहोल्डर)",
        settingsViewAction: "पहा →",
        settingsSaved: "जतन केले",
        settingsLogoutButton: "लॉगआउट",
        assistantGapsIntro: "तुमच्या सर्वात मोठ्या सध्याच्या त्रुटी आहेत {skills}. मी \u201c{course}\u201d ने सुरुवात करण्याची शिफारस करेन.",
        assistantExplainGap: "{skill} सध्या {score}/100 वर आहे — हे आत्मविश्वासाने स्वतंत्र कामासाठी अपेक्षित असलेल्या पातळीपेक्षा कमी आहे, म्हणूनच ते त्रुटी म्हणून चिन्हांकित केले आहे.",
        assistantExplainOk: "{skill} सध्या {score}/100 वर आहे — हा एक चांगला गुण आहे, म्हणून सध्या ते त्रुटी म्हणून चिन्हांकित केलेले नाही.",
        assistantRecommendations: "तुमच्या कौशल्य त्रुटींवर आधारित, मी शिफारस करेन: {courses}.",
        assistantProgress: "तुम्ही एकूण {score}/100 वर आहात, तुमच्या सध्याच्या शिक्षण मार्गाच्या {progress}% वर, आणि या तिमाहीत {hours} शिक्षण तास नोंदवले आहेत.",
        assistantAssessmentsPending: "तुमच्याकडे {count} प्रलंबित मूल्यांकन आहेत: {assessments}.",
        assistantAssessmentsNone: "सध्या तुमच्याकडे कोणतेही प्रलंबित मूल्यांकन नाही — छान काम!",
        assistantFallback: "मी सध्या फ्रंटएंड मॉक सहाय्यक आहे, त्यामुळे मी फक्त तुमच्या विद्यमान डॅशबोर्ड डेटाचा वापर करून तुमच्या कौशल्य त्रुटी, शिफारसी, प्रगती आणि मूल्यांकनांबद्दलच्या प्रश्नांची उत्तरे देऊ शकतो.",
        assistantTyping: "टाइप करत आहे…",
        chipSkillGaps: "माझ्या कौशल्य त्रुटी काय आहेत?",
        chipWhyPython: "Python ला त्रुटी म्हणून का ओळखले गेले?",
        chipRecommendedCourses: "माझ्यासाठी कोणते कोर्स शिफारस केलेले आहेत?",
        chipProgress: "माझी शिक्षण प्रगती दाखवा.",
        chipPendingAssessment: "कोणते मूल्यांकन प्रलंबित आहे?",
        journeyStepCompetency: "क्षमता",
        journeyStepSkillGap: "कौशल्य त्रुटी",
        journeyStepLearning: "वैयक्तिकृत शिक्षण",
        journeyStepAssessment: "मूल्यांकन",
        journeyStepProgress: "प्रगती",
        pipelineHeading: "पुढे काय होते",
        pipelineCompetency: "क्षमता अद्ययावत झाली",
        pipelineSkillGap: "कौशल्य त्रुटी पुनर्मूल्यांकित",
        pipelineRecommendation: "शिफारसी ताज्या झाल्या",
        wizStepSelectContent: "सामग्री निवडा",
        wizStepConfigure: "क्विझ कॉन्फिगर करा",
        wizStepGenerating: "क्विझ तयार होत आहे…",
        wizStepPreview: "पूर्वावलोकन आणि संपादन",
        wizStepPublished: "क्विझ प्रकाशित",
        wizContentLabel: "शिक्षण सामग्री निवडा",
        wizCountLabel: "प्रश्नांची संख्या",
        wizDifficultyLabel: "अडचण",
        wizGenerateButton: "तयार करा",
        wizGeneratingText: "निवडलेल्या सामग्रीवरून प्रश्न तयार होत आहेत…",
        wizPreviewHint: "प्रकाशित करण्यापूर्वी तयार केलेल्या प्रश्नांचे पुनरावलोकन आणि संपादन करा.",
        wizRemoveButton: "प्रश्न काढा",
        wizBackButton: "← मागे",
        wizPublishButton: "क्विझ प्रकाशित करा",
        wizPublishedText: "तुमची क्विझ प्रकाशित झाली आहे आणि मूल्यांकनांमध्ये जोडली गेली आहे.",
        wizDoneButton: "पूर्ण",
      },
      admin: {
        welcomeHeading: "स्वागत आहे, प्रशासक",
        totalOfficersLabel: "एकूण अधिकारी",
        totalDepartmentsLabel: "एकूण विभाग",
        officersAssessedLabel: "मूल्यांकित अधिकारी",
        totalCoursesLabel: "शिक्षण संसाधने / कोर्स",
        competencyOverviewHeading: "क्षमता वितरण",
        skillGapAnalyticsHeading: "एकत्रित कौशल्य त्रुटी विश्लेषण",
        departmentPerformanceHeading: "विभाग कामगिरी",
        activityHeading: "अलीकडील व्यासपीठ क्रियाकलाप",
        quickActionsHeading: "त्वरित कृती",
        officersHeading: "अधिकारी व्यवस्थापन",
        pendingHeading: "प्रलंबित नोंदणी",
        departmentsHeading: "विभाग",
        coursesHeading: "कोर्स",
        resourcesHeading: "शिक्षण संसाधने",
        recommendationsHeading: "शिफारसी",
        assessmentsHeading: "मूल्यांकन",
        questionBankHeading: "प्रश्न बँक",
        reportsHeading: "अहवाल",
        profileHeading: "प्रोफाइल",
        settingsHeading: "सेटिंग्ज",
        trainingEffectivenessHeading: "प्रशिक्षण परिणामकारकता",
        emergingSkillsHeading: "उदयोन्मुख कौशल्य गरजा",
        tpacProgramsHeading: "NSSTA TPAC कार्यक्रम",
        learningActivityHeading: "शिक्षण क्रियाकलाप",
        predictiveInsightsHeading: "भविष्यसूचक क्षमता-निर्माण अंतर्दृष्टी",
        journeyStepWorkforce: "कार्यबल क्षमता",
        journeyStepSkillGaps: "कौशल्य त्रुटी",
        journeyStepTrainingEffectiveness: "प्रशिक्षण परिणामकारकता",
        journeyStepEmergingSkills: "उदयोन्मुख कौशल्ये",
        journeyStepCapacityPlanning: "क्षमता नियोजन",
      },
      sidebar: {
        dashboard: "डॅशबोर्ड",
        officers: "अधिकारी व्यवस्थापन",
        pending: "प्रलंबित नोंदणी",
        departments: "विभाग",
        competencyAnalytics: "क्षमता विश्लेषण",
        skillGapAnalytics: "कौशल्य त्रुटी विश्लेषण",
        courses: "कोर्स",
        resources: "शिक्षण संसाधने",
        recommendations: "शिफारसी",
        assessments: "मूल्यांकन",
        questionBank: "MCQ/प्रश्न बँक",
        reports: "अहवाल",
        profile: "प्रोफाइल",
        settings: "सेटिंग्ज",
        logout: "लॉगआउट",
        trainingEffectiveness: "प्रशिक्षण परिणामकारकता",
        emergingSkills: "उदयोन्मुख कौशल्ये",
        tpacPrograms: "NSSTA TPAC कार्यक्रम",
        assessmentsGroup: "मूल्यांकन",
        questionBankGroup: "प्रश्न बँक",
        aiAssessmentGenerator: "एआय मूल्यांकन जनरेटर",
        publishedAssessments: "प्रकाशित मूल्यांकन",
        assessmentResults: "मूल्यांकन निकाल",
        generatedQuestions: "तयार केलेले प्रश्न",
      },
      table: {
        name: "नाव",
        id: "आयडी",
        department: "विभाग",
        designation: "पदनाम",
        status: "स्थिती",
        requestedRole: "विनंती केलेली भूमिका",
        date: "तारीख",
        officers: "अधिकारी",
        avgScore: "सरासरी गुण",
        title: "शीर्षक",
        category: "श्रेणी",
        enrolled: "नोंदणीकृत",
        duration: "कालावधी",
        type: "प्रकार",
        domain: "डोमेन",
        officer: "अधिकारी",
        recommended: "शिफारस केलेले",
        attempts: "प्रयत्न",
        difficulty: "अडचण",
        generatedOn: "वर तयार केले",
        question: "प्रश्न",
        completionRate: "पूर्णता दर",
        scoreImprovement: "सरासरी गुण सुधारणा",
        demandTrend: "मागणी कल",
        cohortSize: "गट आकार",
        period: "कालावधी",
        hoursLogged: "नोंदवलेले तास",
        source: "स्रोत",
        completions: "पूर्णता",
      },
    },
  },
};
