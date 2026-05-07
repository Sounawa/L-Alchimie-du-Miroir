import { create } from "zustand";

export interface JournalEntry {
  id: string;
  section: string;
  label: string;
  content: string;
  updatedAt: string;
}

interface JournalStore {
  entries: Record<string, string>; // id -> content
  setEntry: (id: string, content: string) => void;
  getFormattedRecap: () => string;
  getFilledCount: () => number;
}

// Section metadata for display
export const SECTIONS: Record<string, { title: string; icon: string }> = {
  "chapitre-1": { title: "Chapitre I — Les Fondations", icon: "Chapter I" },
  "chapitre-2": { title: "Chapitre II — Fana", icon: "Chapter II" },
  "chapitre-3": { title: "Chapitre III — Tajalli", icon: "Chapter III" },
  "chapitre-4": { title: "Chapitre IV — Munajat", icon: "Chapter IV" },
  "chapitre-5": { title: "Chapitre V — La Béance", icon: "Chapter V" },
  "chapitre-6": { title: "Chapitre VI — 21 Jours", icon: "Chapter VI" },
  "annexes": { title: "Annexes", icon: "Annexes" },
};

export const useJournalStore = create<JournalStore>((set, get) => ({
  entries: {},

  setEntry: (id, content) =>
    set((state) => ({
      entries: { ...state.entries, [id]: content },
    })),

  getFormattedRecap: () => {
    const { entries } = get();
    const filled = Object.entries(entries).filter(([, v]) => v.trim().length > 0);
    if (filled.length === 0) return "";

    const divider = "\n" + "─".repeat(50) + "\n";

    let text = "L'ALCHIMIE DU MIROIR — MON JOURNAL\n";
    text += "Recapitulatif personnel\n";
    text += `Genere le : ${new Date().toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}\n`;
    text += divider;

    // Group by section prefix
    const grouped: Record<string, [string, string][]> = {};
    for (const [id, content] of filled) {
      const sectionId = id.split(".")[0];
      if (!grouped[sectionId]) grouped[sectionId] = [];
      grouped[sectionId].push([id, content]);
    }

    for (const [sectionId, items] of Object.entries(grouped)) {
      const sectionInfo = SECTIONS[sectionId];
      text += `\n${sectionInfo ? sectionInfo.title : sectionId.toUpperCase()}\n`;
      text += "═".repeat(40) + "\n";

      for (const [id, content] of items) {
        const label = id.split(".")[1]?.replace(/-/g, " ") || id;
        text += `\n  ${label.charAt(0).toUpperCase() + label.slice(1)}\n`;
        text += content.trim() + "\n";
      }
    }

    text += divider;
    text += `\nJours de pratique completes : non disponibles dans ce recap.\n`;
    text += `Total entrees : ${filled.length}\n`;
    text += divider;
    text += "\n\u2756 L'Alchimie du Miroir — Niveau 1 : Initiation\n";

    return text;
  },

  getFilledCount: () => {
    const { entries } = get();
    return Object.values(entries).filter((v) => v.trim().length > 0).length;
  },
}));
