import { 
  technologyServices, 
  digitalMarketingServices, 
  experienceDesignServices, 
  brandingServices 
} from '@/data/services/mainServices';

const serviceDataMap = {
  technology: technologyServices,
  'digital-marketing': digitalMarketingServices,
  'experience-design': experienceDesignServices,
  branding: brandingServices
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = serviceDataMap[slug];

  if (!data) {
    return {
      title: 'Service Not Found | ByteSpire Innovations'
    };
  }

  return {
    title: `${data.title} | ByteSpire Innovations`,
    description: data.description,
    openGraph: {
      title: `${data.title} | ByteSpire Innovations`,
      description: data.description,
    }
  };
}

export default function ServiceDetailLayout({ children }) {
  return <>{children}</>;
}
