// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux/es/exports";
// import { TypedUseSelectorHook } from "react-redux/es/types";
// import { AppDispatch, RootState } from "./index";

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use these hooks throughout your application instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
