import { create } from 'zustand';

const useStore = create((set) => ({
    characters: [],
    character: {},
    searchQuery: '',
    currentPage: 1,
    lastPage: 0,
    loading: false,
    setCharacters: (characters) => set({ characters }),
    setCharacter: (character) => set({ character }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    setCurrentPage: (page) => set({ currentPage: page }),
    setLastPage: (page) => set({ lastPage: page }),
    setLoading: (loading) => set({ loading }),
}));

export default useStore;