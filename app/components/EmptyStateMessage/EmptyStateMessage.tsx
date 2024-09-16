import React from 'react';
import { IllustratedMessage, Button } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-fiori/dist/illustrations/NoData.js';

type Props = {
  illustrationName?: string;
  titleText?: string;
  subtitleText?: string;
};

/**
 * Component to display an empty state message with an illustration.
 * @param {string} illustrationName - The name of the illustration to display.
 * @param {string} titleText - The title text to display.
 * @param {string} subtitleText - The subtitle text to display.
 *
 * @returns The EmptyStateMessage component.
 */
export const EmptyStateMessage = ({
  illustrationName = 'NoData',
  titleText = 'No Data Available',
  subtitleText = 'There is currently no data to display.',
}: Props) => {
  return <IllustratedMessage name={illustrationName} titleText={titleText} subtitleText={subtitleText} />;
};
