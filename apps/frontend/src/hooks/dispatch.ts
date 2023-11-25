import { useDispatch as useBaseDispatch } from 'react-redux';
import { AppDispatch } from '../store/configure-store';

export const useDispatch = () => useBaseDispatch<AppDispatch>();
