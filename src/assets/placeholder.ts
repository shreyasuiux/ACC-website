/**
 * PLACEHOLDER ASSET SYSTEM
 * Replaces figma:asset imports with placeholder data URLs
 * This prevents build errors until real assets are provided
 */

// 1x1 transparent PNG as base64
export const PLACEHOLDER_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

// Create placeholder with specific dimensions (still returns placeholder but documents intent)
export const createPlaceholder = (width?: number, height?: number, name?: string): string => {
  // In production, this would generate sized placeholders
  // For now, returns the same placeholder but documents the intended size
  console.warn(`Placeholder used for image: ${name || 'unknown'} (${width}x${height})`);
  return PLACEHOLDER_IMAGE;
};

// Export named placeholders for easy replacement later
export const PLACEHOLDERS = {
  BACKGROUND: PLACEHOLDER_IMAGE,
  HERO: PLACEHOLDER_IMAGE,
  SERVICE_CARD: PLACEHOLDER_IMAGE,
  PRODUCT_CARD: PLACEHOLDER_IMAGE,
  TEAM_MEMBER: PLACEHOLDER_IMAGE,
  INITIATIVE: PLACEHOLDER_IMAGE,
  SPORTS_CULTURE: PLACEHOLDER_IMAGE,
  REWARDS: PLACEHOLDER_IMAGE,
  VIDEO_THUMBNAIL: PLACEHOLDER_IMAGE,
  TEXTURE: PLACEHOLDER_IMAGE,
  NOISE: PLACEHOLDER_IMAGE,
};
