import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useUserStore = create((set) => ({
  currentUser: 0,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return set({currentUser:null, isLoading: false})

    try {
      const docRef = doc(db, "users", uid)
      const docSpap = await getDoc(docRef)

      if (docSpap) {
        set({currentUser: docSpap.data(), isLoading: false})
      } else {
        set({currentUser: null, isLoading: false})
      }
    } catch (err) {
      console.log(err);
      return set({currentUser: null, isLoading: false})
    }
  }
}))
