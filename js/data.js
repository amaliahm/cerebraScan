/**
 * Central place for copy and image URLs (static “CMS” for this demo).
 *
 * What lives here (read top-to-bottom when learning the app):
 * - `SITE` — brand strings used in greetings / titles.
 * - `IMAGE_REMOTE_FALLBACK` — remote mirrors for hero/team when local `/public` files 404.
 * - `IMAGES` — primary paths/URLs keyed for `data-dynamic-img` and JS modules.
 * - `TEAM_MEMBERS` — doctor cards + modal content for doctorReel.js.
 * - `PARENT_REVIEWS` — story cards + modal quotes for reviewsReel.js.
 *
 * There is no fetch() to a JSON API: modules import these exports directly.
 * Hero collage + full-bleed slides use files under /public/hero/ (see scripts/download-hero-assets.mjs).
 */

export const SITE = {
  name: "CerebraScan",
  tagline: "Your AI Segmentation Assistant",
};

/** Remote URLs keyed like IMAGES (for `<img>` error recovery in bindTeamImg / bindImg / hero). */
export const IMAGE_REMOTE_FALLBACK = {
  heroGallery1: "/public/hero/collage-3.jpg",
  heroGallery2: "/public/hero/collage-1.jpg",
  heroGallery3: "/public/hero/collage-4.jpg",
  heroGallery4: "/public/hero/collage-2.jpg",
  heroGallery5: "/public/hero/bg-image-3.jpg",
  hero: "/public/hero/bg-image-3.jpg",
  about: "/public/hero/about-image.jpg",
  catHero: "/public/hero/image.jpg",
  dogSmile: "/public/hero/radio-image.jpg",
  rabbit: "/public/hero/image-3.jpg",
  fish: "/public/hero/image-2.jpg",
  turtle: "/public/hero/image-4.jpg",
  guineaPig: "/public/hero/bg-image-5.jpg",
  hamster: "/public/hero/collage-2.jpg",
  heroBgDogChewy: "/public/hero/bg-dog-chewy.jpg",
  heroBgDogRun: "/public/hero/bg-image-3.jpg",
  heroBgDogPortrait: "/public/hero/bg-image-2.jpg",
  heroBgCatAlt: "/public/hero/bg-image-1.jpg",
  heroBgRabbitAlt: "/public/hero/bg-image-6.jpg",
  heroBgFishAlt: "/public/hero/bg-fish-alt.jpg",
  heroBgTurtleOcean: "/public/hero/bg-image-7.jpg",
  heroBgBird: "/public/hero/bg-doc.jpg",
  heroBgDuck: "/public/hero/bg-image-4.jpg",
  team1: "/public/images/team1.jpg",
  team2: "/public/images/team2.png",
  team3: "/public/images/team3.png",
  team4: "/public/images/team4.jpg",
  team5: "/public/images/team5.jpg",
  team6: "/public/images/team6.jpg",
  team7: "/public/images/team7.jpg",
  team8: "/public/images/team8.jpg",
  vetTeam1: "/public/images/team1.jpg",
  vetTeam2: "/public/images/team2.jpg",
  vetTeam3: "/public/images/team3.jpg",
  vetTeam4: "/public/images/team4.jpg",
  review1:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  review2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  review3:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  parallaxBg: "/public/hero/scanner-bg.jpg",
};

/** @type {Record<string, string>} */
export const IMAGES = {
  heroGallery1: "/public/hero/collage-3.jpg",
  heroGallery2: "/public/hero/collage-1.jpg",
  heroGallery3: "/public/hero/collage-4.jpg",
  heroGallery4: "/public/hero/collage-2.jpg",
  heroGallery5: "/public/hero/bg-image-3.jpg",
  hero: "/public/hero/bg-image-3.jpg",
  about: "/public/hero/about-image.jpg",
  catHero: "/public/hero/image.jpg",
  dogSmile: "/public/hero/radio-image.jpg",
  feedback1: "/public/hero/feedback1.jpg",
  feedback2: "/public/hero/feedback2.png",
  feedback3: "/public/hero/feedback3.jpg",
  feedback4: "/public/hero/feedback4.jpg",
  feedback5: "/public/hero/feedback5.jpg",
  feedback6: "/public/hero/feedback6.jpg",
  feedback7: "/public/hero/feedback7.png",
  feedback8: "/public/hero/feedback8.jpg",
  feedback9: "/public/hero/feedback9.jpg",
  feedback10: "/public/hero/feedback10.jpg",
  rabbit: "/public/hero/image-3.jpg",
  fish: "/public/hero/image-2.jpg",
  turtle: "/public/hero/image-4.jpg",
  guineaPig: "/public/hero/bg-image-5.jpg",
  hamster: "/public/hero/collage-2.jpg",
  heroBgDogChewy: "/public/hero/bg-dog-chewy.jpg",
  heroBgDogRun: "/public/hero/bg-image-3.jpg",
  heroBgDogPortrait: "/public/hero/bg-image-2.jpg",
  heroBgCatAlt: "/public/hero/bg-image-1.jpg",
  heroBgRabbitAlt: "/public/hero/bg-image-6.jpg",
  heroBgFishAlt: "/public/hero/bg-fish-alt.jpg",
  heroBgTurtleOcean: "/public/hero/bg-image-7.jpg",
  heroBgBird: "/public/hero/bg-doc.jpg",
  heroBgDuck: "/public/hero/bg-image-4.jpg",
  team1: "/public/images/team1.jpg",
  team2: "/public/images/team2.jpg",
  team3: "/public/images/team3.jpg",
  team4: "/public/images/team4.jpg",
  team5: "/public/images/team5.jpg",
  team6: "/public/images/team6.jpg",
  team7: "/public/images/team7.jpg",
  team8: "/public/images/team8.jpg",
  vetTeam1: "/public/images/team1.jpg",
  vetTeam2: "/public/images/team2.jpg",
  vetTeam3: "/public/images/team3.jpg",
  vetTeam4: "/public/images/team4.jpg",
  review1:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  review2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  review3:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  parallaxBg: "/public/hero/scanner-bg.jpg",
};

/**
 * Team carousel + modal (js/doctorReel.js). category matches the team filter control values.
 * @typedef {{ id: string, name: string, role: string, category: string, imageKey: string, shortBio: string, bio: string, tags: string[], alt: string }} TeamMember
 */

/** @type {TeamMember[]} */
export const TEAM_MEMBERS = [
  {
    id: "sidi-mohammed",
    name: "Benslimane Sidi Mohammed",
    role: "AI Research Lead",
    category: "ai_research",
    imageKey: "team1",
    shortBio:
      "Professor of Computer Science with 30+ years of experience in semantic technologies, service-oriented computing, and intelligent information systems.",

    bio: "Prof. Benslimane Sidi Mohammed is a Professor of Computer Science and Director of the Higher School of Computer Science (ESI-SBA) in Sidi Bel Abbès. He earned his PhD in Computer Science from the University of Sidi Bel Abbès and has played a leading role in advancing computer science education and research in Algeria. He leads the core AI research team, specializing in weakly supervised and semi-supervised learning for medical imaging.",
    tags: [
      "Weakly Supervised Learning",
      "Medical Segmentation",
      "Deep Learning",
      "MICCAI",
    ],

    alt: "Portrait of Benslimane Sidi Mohammed, AI Research Lead",
  },
  {
    id: "ahmed",
    name: "Benariba Ahmed",
    role: "AI Research Engineer",
    category: "ai_research",
    imageKey: "team2",
    shortBio:
      "PhD researcher in Artificial Intelligence specializing in weakly supervised learning and computational pathology for medical image analysis.",

    bio: "Benariba Ahmed is an AI PhD candidate focused on advancing weakly supervised learning techniques for histopathology image analysis. His research explores annotation-efficient deep learning methods that reduce the dependence on pixel-level expert annotations while maintaining high-performance tissue and lesion understanding. He contributes to the design, evaluation and optimization of state-of-the-art deep learning architectures for computational pathology.",

    tags: [
      "Weakly Supervised Learning",
      "Histopathology Analysis",
      "Computational Pathology",
      "Medical Imaging",
      "Deep Learning",
      "Vision-Language Models",
      "Explainable AI",
      "AI Research",
    ],
    alt: "Portrait of Benariba Ahmed, AI Research Engineer",
  },
  {
    id: "nassima",
    name: "Dif Nassima",
    role: "AI Research Engineer",
    category: "ai_research",
    imageKey: "team3",
    shortBio:
      "Assistant Professor and AI researcher specializing in machine learning, deep learning and intelligent image analysis.",
    bio: "Dif Nassima is a Lecturer at the Higher School of Computer Science (ESI-SBA) and a member of the Research Laboratory in Computer Science (LabRI-SBA). He earned his Doctorate in Information Technology from Djillali Liabes University in 2020. His research interests include Machine Learning, Deep Learning, Image Classification and Feature Selection, with an emphasis on developing intelligent data-driven systems. She gained industry experience as a Software Development Engineer, contributing to the design and implementation of enterprise software solutions.",
    tags: [
      "Machine Learning",
      "Deep Learning",
      "Image Classification",
      "Feature Selection",
      "Data Mining",
      "Artificial Intelligence",
    ],

    alt: "Portrait of Dif Nassima, AI Research Engineer",
  },
  {
    id: "amina",
    name: "Ghandouz Amina",
    role: "Platform Engineer",
    category: "platform_engineering",
    imageKey: "team4",
    shortBio:
      "Full-stack engineer building scalable ML inference pipelines and clinical-grade SaaS infrastructure.",
    bio: "Ghandouz Amina is responsible for building and maintaining the core platform infrastructure that powers end-to-end medical imaging workflows. She develops and optimizes the backend systems that transform raw MRI scans into AI-generated segmentation outputs in near real-time. Her work focuses on scalable ML inference pipelines, DICOM data handling, HL7 FHIR interoperability, and secure cloud deployment on AWS. She plays a key role in ensuring system reliability, performance, and seamless integration between AI models and clinical applications.",
    tags: [
      "MLOps",
      "DICOM",
      "FHIR",
      "Cloud Infrastructure",
      "AWS",
      "Backend Systems",
    ],
    alt: "Portrait of Ghandouz Amina, Platform Engineer",
  },
];

export const PARENT_REVIEWS = [
  {
    id: "dr-sarah-neurology",
    medName: "Beans",
    headline: "Dr. Sarah & NeuroScan AI",
    quote:
      "We caught a grade II glioma that would have been missed for another 6 months. The bounding-box workflow took under a minute.",
    modalQuote:
      "We caught a grade II glioma that would have been missed for another 6 months. The bounding-box workflow took under a minute, and the segmentation overlay matched what I would have drawn manually. This is the first AI tool I've actually trusted in a clinical read.",
    stars: 5,
    ownerName: "Dr. Sarah Mitchell",
    profession: "Neuroradiologist, Johns Hopkins",
    medImageKey: "feedback1",
    avatarKey: "review1",
    medAlt: "MRI brain scan with tumor segmentation overlay highlighted in red",
  },
  {
    id: "prof-hassan-oncology",
    medName: "Noodle",
    headline: "Prof. Hassan & the Platform",
    quote:
      "Our annotation time dropped by 73%. The text-guided approach is genuinely novel — not just another black box.",
    modalQuote:
      "Our annotation time dropped by 73% across our research cohort. The text-guided approach is genuinely novel — not just another black box. We fed it radiology report snippet and got pixel-level masks that held up against our ground truth labels. I've recommended it to two other university hospitals already.",
    stars: 5,
    ownerName: "Prof. Hassan Al-Farsi",
    profession: "Oncology Research Lead, Charité Berlin",
    medImageKey: "feedback2",
    avatarKey: "review2",
    medAlt:
      "Side-by-side comparison of manual annotation versus AI-generated segmentation mask",
  },
  {
    id: "dr-ling-radiology",
    medName: "Mochi",
    headline: "Dr. Ling's Reading Room",
    quote:
      "I was skeptical of image-level supervision. The results changed my mind completely.",
    modalQuote:
      "I was skeptical of image-level supervision — it sounds like a shortcut. The results changed my mind completely. The Dice scores on our internal test set were within 4% of fully supervised models. For a tool that only needs a bounding box and a report line, that's remarkable. My residents now use it as a second read on every brain MRI.",
    stars: 5,
    ownerName: "Dr. Ling Wei",
    profession: "Chief Radiologist, Singapore General Hospital",
    medImageKey: "feedback3",
    avatarKey: "review2",
    medAlt:
      "Bar chart comparing Dice scores between weakly supervised and fully supervised segmentation models",
  },
  {
    id: "marcos-ml-engineer",
    medName: "Biscuit",
    headline: "Marcos & the API",
    quote:
      "Integrated into our hospital PACS in two days. The DICOM pipeline just worked — no wrestling with formats.",
    modalQuote:
      "Integrated into our hospital PACS in two days. The DICOM pipeline just worked — no wrestling with formats or proprietary tags. The inference endpoint returns segmentation masks in standard NIfTI format with confidence scores per voxel. Our engineering team was genuinely impressed by the API design. Support responded to our one edge-case question within three hours.",
    stars: 5,
    ownerName: "Marcos Fernández",
    profession: "ML Engineer, Hospital Universitario La Paz",
    medImageKey: "feedback4",
    avatarKey: "review2",
    medAlt:
      "Screenshot of the segmentation API response showing NIfTI mask output and confidence scores",
  },
  {
    id: "dr-amara-clinical-trial",
    medName: "Fig",
    headline: "Dr. Amara's Clinical Trial",
    quote:
      "We used it to pre-screen 400 MRIs for our trial. What would have taken weeks took three days.",
    modalQuote:
      "We used it to pre-screen 400 MRIs for our glioblastoma treatment trial. What would have taken a team of radiologists three weeks took three days. The recall on high-grade tumors was 97%. We still do a manual review pass, but the tool cut our workload by 80% and let us hit our enrollment deadline.",
    stars: 5,
    ownerName: "Dr. Amara Diallo",
    profession: "Principal Investigator, Institut Curie",
    medImageKey: "feedback5",
    avatarKey: "review1",
    medAlt:
      "Grid of brain MRI thumbnails with AI-generated tumor detection highlights used in clinical trial screening",
  },
  {
    id: "nina-product-feedback",
    medName: "Tofu",
    headline: "Nina on Usability",
    quote:
      "Our radiologists adopted it without a single training session. That never happens with new software.",
    modalQuote:
      "Our radiologists adopted it without a single training session. That never happens with new software in a hospital setting. The interface surfaces the segmentation directly inside the reading workflow — no tab switching, no export steps. A few asked if it had always been part of our system. The onboarding team was also incredibly responsive during our pilot setup.",
    stars: 4,
    ownerName: "Nina Johansson",
    profession:
      "Digital Health Product Manager, Karolinska University Hospital",
    medImageKey: "feedback6",
    avatarKey: "review3",
    medAlt:
      "Radiologist workstation screen showing AI segmentation overlay embedded in the PACS reading interface",
  },
  {
    id: "dr-youssef-rural-hospital",
    medName: "Pip",
    headline: "Dr. Youssef's Rural Clinic",
    quote:
      "We don't have a neuroradiologist on site. This tool gives our patients expert-level screening they couldn't access before.",
    modalQuote:
      "We don't have a neuroradiologist on site — the nearest specialist is 200 kilometers away. This tool gives our patients expert-level screening they couldn't access before. A flagged case gets teleradiology review within hours instead of weeks. We've had two early-stage detections in the first month that genuinely changed patient outcomes.",
    stars: 5,
    ownerName: "Dr. Youssef Boumediene",
    profession: "General Radiologist, Constantine Regional Hospital",
    medImageKey: "feedback7",
    avatarKey: "review2",
    medAlt:
      "Early-stage brain tumor highlighted on MRI scan flagged by the AI system for specialist review",
  },
  {
    id: "priya-research-lab",
    medName: "Waffle",
    headline: "Priya's Research Lab",
    quote:
      "The weakly supervised approach reproduced our fully annotated baseline on BRATS within 5% Dice. We published the comparison.",
    modalQuote:
      "The weakly supervised approach reproduced our fully annotated baseline on the BraTS 2023 dataset within 5% Dice score — using only image-level labels and bounding boxes. We published the comparison in a workshop paper at MICCAI. The team was helpful in providing the technical details we needed to describe the method accurately. This is the kind of tool that actually advances the field.",
    stars: 5,
    ownerName: "Priya Nair",
    profession: "PhD Researcher, IIT Bombay — Medical Imaging Lab",
    medImageKey: "feedback8",
    avatarKey: "review1",
    medAlt:
      "Side-by-side BraTS dataset segmentation results comparing weakly supervised model output to ground truth labels",
  },

  {
    id: "thomas-hospital-it",
    medName: "Waffle",
    headline: "Thomas on Integration",
    quote:
      "HIPAA compliance docs were ready on day one. That alone saved us two months of procurement back-and-forth.",
    modalQuote:
      "HIPAA compliance docs, BAA, and SOC 2 Type II report were ready on day one of our vendor evaluation. That alone saved us two months of procurement back-and-forth with our legal team. The on-premise deployment option was a hard requirement for us, and the team had a containerized setup running in our data center within a week. Rare to see a startup this prepared for enterprise security reviews.",
    stars: 4,
    ownerName: "Thomas Becker",
    profession: "IT Security Director, Heidelberg University Hospital",
    medImageKey: "feedback9",
    avatarKey: "review2",
    medAlt:
      "Compliance dashboard showing HIPAA, SOC 2, and GDPR certification badges alongside system audit log",
  },
  {
    id: "dr-claire-second-opinion",
    medName: "Waffle",
    headline: "Dr. Claire's Second Opinion",
    quote:
      "It flagged a contralateral lesion I had dismissed as artifact. Pathology confirmed it was real.",
    modalQuote:
      "It flagged a contralateral lesion I had dismissed as artifact on the initial read. The segmentation confidence was high enough that I went back and reviewed the sequence. Pathology confirmed it was real — a small satellite lesion that changed the surgical plan entirely. I now treat the AI output as a mandatory second read. It's caught two things I would have missed in three months of use.",
    stars: 5,
    ownerName: "Dr. Claire Fontaine",
    profession: "Neuroradiologist, CHU de Bordeaux",
    medImageKey: "feedback10",
    avatarKey: "review2",
    medAlt:
      "Brain MRI showing AI-detected satellite lesion contralateral to the primary tumor, confirmed by pathology",
  },
];
