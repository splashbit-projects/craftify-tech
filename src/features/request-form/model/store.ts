import { create } from 'zustand';

type RequestFormStore = {
  serviceName: string;
  expertName: string;
  setServiceName: (serviceName: string) => void;
  setExpertName: (expertName: string) => void;
};

const STORAGE_KEY = 'request-form-store';

// Завантаження з localStorage
const loadFromStorage = (): Partial<RequestFormStore> => {
  if (typeof window === 'undefined') {
    return { serviceName: '', expertName: '' };
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
  }
  return { serviceName: '', expertName: '' };
};

// Збереження в localStorage
const saveToStorage = (state: Partial<RequestFormStore>) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
};

export const useRequestFormStore = create<RequestFormStore>((set) => {
  const initialState = loadFromStorage();

  return {
    serviceName: initialState.serviceName || '',
    expertName: initialState.expertName || '',
    setServiceName: (serviceName: string) => {
      set({ serviceName });
      saveToStorage({ serviceName });
    },
    setExpertName: (expertName: string) => {
      set({ expertName });
      saveToStorage({ expertName });
    },
  };
});

// Підписка на зміни для синхронізації з localStorage
if (typeof window !== 'undefined') {
  useRequestFormStore.subscribe((state) => {
    saveToStorage({
      serviceName: state.serviceName,
      expertName: state.expertName,
    });
  });
}
