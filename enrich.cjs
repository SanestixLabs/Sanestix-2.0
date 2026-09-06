const fs = require('fs');
const path = './src/data/services.ts';

let content = fs.readFileSync(path, 'utf-8');

// The file exports a type and an array. We can use a regex to extract the array, 
// augment it, and write it back. Or simply evaluate it!
// To evaluate, we need to strip export type Service = {...} and export const services =
const arrayString = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);

let services;
try {
  services = eval('(' + arrayString + ')');
} catch (e) {
  console.error("Failed to parse array", e);
  process.exit(1);
}

const enriched = services.map(s => {
  const customDeepDive = {
    'custom-ai-development': {
      title: 'Architecting your proprietary intelligence.',
      p1: 'Off-the-shelf AI tools often fail to capture the nuanced realities of specific business operations. We build custom models that integrate seamlessly with your unique data schemas and operational workflows.',
      p2: 'From initial data curation and model training to deployment and continuous monitoring, our end-to-end AI pipelines are engineered for precision, scalability, and measurable ROI.',
      list: ['Proprietary model architecture', 'Secure data curation pipelines', 'Continuous model retraining']
    },
    'machine-learning-solutions': {
      title: 'Turning data into predictive power.',
      p1: 'Your historical data is your most valuable asset. Our machine learning pipelines transform raw databases into automated forecasting engines, anomaly detection systems, and dynamic pricing models.',
      p2: 'We deploy robust MLOps infrastructure that ensures your models remain accurate and performant in production, seamlessly handling data drift and scaling with demand.',
      list: ['Advanced predictive modeling', 'Automated MLOps pipelines', 'Real-time inference engines']
    },
    'computer-vision': {
      title: 'Giving your systems the ability to see.',
      p1: 'From automated quality assurance on manufacturing lines to real-time spatial analysis for retail, our computer vision systems process visual data with superhuman speed and accuracy.',
      p2: 'By leveraging state-of-the-art CNNs and edge computing, we deploy vision models that operate in real-time, drastically reducing manual inspection costs and improving operational safety.',
      list: ['Real-time object detection', 'Edge AI deployment', 'Automated visual QA']
    },
    'ai-integration-services': {
      title: 'Fusing AI directly into your stack.',
      p1: 'You don\'t always need to build from scratch to achieve an AI advantage. We expertly integrate industry-leading foundation models into your existing SaaS and custom platforms.',
      p2: 'Our API-first integration strategies prioritize data security, low latency, and fallback mechanisms, ensuring that adding intelligence to your application never compromises reliability.',
      list: ['Secure API gateways', 'Microservices architecture', 'Zero-downtime deployment']
    }
  };

  // Default generator if not explicitly defined above
  const genericDeepDive = {
    title: `Uncompromising ${s.category.toLowerCase()} architecture.`,
    p1: `Implementing ${s.title.toLowerCase()} requires more than just code—it requires a deep understanding of your business objectives. We engineer systems that are not only feature-rich but structurally sound.`,
    p2: `By prioritizing clean architecture, robust security protocols, and seamless scalability, we ensure that your investment in ${s.category.toLowerCase()} continues to drive value long after the initial launch.`,
    list: [`Rapid iterative delivery for ${s.title}`, `Enterprise-grade security protocols`, `Comprehensive documentation & handoff`]
  };

  const extra = customDeepDive[s.id] || genericDeepDive;

  return {
    ...s,
    deepDiveTitle: extra.title,
    deepDiveText1: extra.p1,
    deepDiveText2: extra.p2,
    deepDiveList: extra.list
  };
});

const output = `export type Service = {
  id: string;
  category: string;
  title: string;
  description: string;
  benefits: string[];
  deepDiveTitle: string;
  deepDiveText1: string;
  deepDiveText2: string;
  deepDiveList: string[];
};

export const services: Service[] = ${JSON.stringify(enriched, null, 2)};
`;

fs.writeFileSync(path, output);
console.log("Services enriched successfully!");
