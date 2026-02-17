import React, { createContext, useState, ReactNode } from "react";

// 1. Export this type so you can use it in other files if needed
export type NewsItem = {
  id: string;
  category: string;
  source: string;
  title: string;
  snippet: string;
  image: string;
};

// 2. The Context just holds the 'news' array
type NewsContextType = {
  news: NewsItem[];
};

export const NewsContext = createContext<NewsContextType | null>(null);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  // const [news] = useState<NewsItem[]>([
  const [news] = useState([
    {
      id: '1',
      category: 'NAVY',
      source: 'REUTERS • 2H',
      title: 'New Stealth Destroyer Joins Pacific Fleet Amid Regional Tensions',
      snippet: 'The vessel features advanced electromagnetic railgun capabilities and...',
      image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=200&auto=format&fit=crop', 
    },
    {
      id: '2',
      category: 'CYBER',
      source: 'DOD NEWS • 4H',
      title: 'Global Defense Infrastructure Targeted in Latest Coordinated Breach',
      snippet: 'Cyber Command officials report a state-sponsored attempt to infiltrate satellite...',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: '3',
      category: 'SPACE',
      source: 'SPACEFORCE • 6H',
      title: 'Satellite Reconnaissance Network Reaches Full Operational Capacity',
      snippet: 'The final constellation of tactical imaging satellites was successfully deployed from...',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: '4',
      category: 'ARMY',
      source: 'AP NEWS • 8H',
      title: 'Next-Gen Main Battle Tank Prototype Revealed with Hybrid Propulsion',
      snippet: 'The prototype emphasizes crew safety with a remote turret and active trophy defense...',
      image: 'https://images.unsplash.com/photo-1574627090886-0617ba85a536?q=80&w=200&auto=format&fit=crop',
    },
  ]);

  return (
    <NewsContext.Provider value={{ news }}>
      {children}
    </NewsContext.Provider>
  );
};