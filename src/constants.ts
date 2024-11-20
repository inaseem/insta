import { Status, Story } from './types';

export const mockStories = [
  {
    id: '1',
    type: 'photo',
    src: 'https://www.stage.in/_next/image?url=https%3A%2F%2Fmedia.stage.in%2Fshow%2Fvertical%2Fsmall%2FshowImage-1723012728745.jpg&w=384&q=75',
    duration: 5000,
  },
  {
    id: '2',
    type: 'photo',
    src: 'https://www.stage.in/_next/image?url=https%3A%2F%2Fmedia.stage.in%2Fshow%2Fvertical%2Fsmall%2FshowImage-1696930317030.jpg&w=256&q=75',
    duration: 5000,
  },
  {
    id: '3',
    type: 'photo',
    src: 'https://www.stage.in/_next/image?url=https%3A%2F%2Fmedia.stage.in%2Fshow%2Fvertical%2Fsmall%2FshowImage-1728657185924.jpg&w=256&q=75',
    duration: 5000,
  },
  {
    id: '4',
    type: 'photo',
    src: 'https://www.stage.in/_next/image?url=https%3A%2F%2Fmedia.stage.in%2Fshow%2Fvertical%2Fsmall%2FshowImage-1726731203905.jpg&w=384&q=75',
    duration: 5000,
  },
  {
    id: '5',
    type: 'photo',
    src: 'https://www.stage.in/_next/image?url=https%3A%2F%2Fmedia.stage.in%2Fshow%2Fvertical%2Fsmall%2Fmuklavo-hr_har_eng_2x3.jpg&w=384&q=75',
    duration: 5000,
  },
  {
    id: '6',
    type: 'video',
    src: 'https://media.stage.in/subscription/tnpl_2/NC_paywall_trial_har_english_v2.mp4',
    duration: 5000,
  },
] as Story[];

export const statusList = [
  {
    id: '1',
    name: 'Aarav',
    handle: '@aarav',
    stories: mockStories,
  },
  {
    id: '2',
    name: 'Bhavna',
    handle: '@bhavna',
    stories: mockStories,
  },
  {
    id: '3',
    name: 'Chirag',
    handle: '@chirag',
    stories: mockStories,
  },
  {
    id: '4',
    name: 'Deepa',
    handle: '@deepa',
    stories: mockStories,
  },
  {
    id: '5',
    name: 'Esha',
    handle: '@esha',
    stories: mockStories,
  },
  {
    id: '6',
    name: 'Farhan',
    handle: '@farhan',
    stories: mockStories,
  },
  {
    id: '7',
    name: 'Gauri',
    handle: '@gauri',
    stories: mockStories,
  },
] as Status[];

export const routes = {
  home: '/',
  stories: '/stories',
};
