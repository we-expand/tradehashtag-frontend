export interface MarketData {
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  volume: number;
  timestamp: number;
}

export interface AIScore {
  score: number;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  confidence: number;
  signals: {
    technical: number;
    fundamental: number;
    sentiment: number;
  };
}

const generateMockPrice = (base: number, volatility: number = 0.02): number => {
  const change = (Math.random() - 0.5) * base * volatility;
  return base + change;
};

export const fetchGoldData = async (): Promise<MarketData> => {
  const basePrice = 2050;
  const price = generateMockPrice(basePrice, 0.01);
  const change = price - basePrice;
  
  return {
    price,
    change,
    changePercent: (change / basePrice) * 100,
    high: price * 1.005,
    low: price * 0.995,
    volume: Math.random() * 1000000,
    timestamp: Date.now()
  };
};

export const fetchSP500Data = async (): Promise<MarketData> => {
  const basePrice = 4750;
  const price = generateMockPrice(basePrice, 0.015);
  const change = price - basePrice;
  
  return {
    price,
    change,
    changePercent: (change / basePrice) * 100,
    high: price * 1.008,
    low: price * 0.992,
    volume: Math.random() * 5000000,
    timestamp: Date.now()
  };
};

export const fetchBitcoinData = async (): Promise<MarketData> => {
  const basePrice = 42000;
  const price = generateMockPrice(basePrice, 0.03);
  const change = price - basePrice;
  
  return {
    price,
    change,
    changePercent: (change / basePrice) * 100,
    high: price * 1.02,
    low: price * 0.98,
    volume: Math.random() * 10000000,
    timestamp: Date.now()
  };
};

export const calculateAIScore = async (): Promise<AIScore> => {
  const technical = Math.floor(Math.random() * 40) + 60;
  const fundamental = Math.floor(Math.random() * 40) + 50;
  const sentiment = Math.floor(Math.random() * 40) + 55;
  
  const score = Math.floor((technical + fundamental + sentiment) / 3);
  
  return {
    score,
    sentiment: score >= 60 ? 'bullish' : score >= 40 ? 'neutral' : 'bearish',
    confidence: Math.floor(Math.random() * 20) + 75,
    signals: {
      technical,
      fundamental,
      sentiment
    }
  };
};
