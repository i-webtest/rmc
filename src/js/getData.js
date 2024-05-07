// import { hideLoader, showLoader } from './loader';

export const getData = async (url) => {
  // showLoader();
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed...');
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching: ${error}`);
  } finally {
    console.log('Finally');
    // hideLoader();
  }
};
