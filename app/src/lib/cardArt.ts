/**
 * Card artwork URLs keyed by Major Arcana number (00–21), globbed from
 * src/assets/cards/*.jpg at build time. Shared by TarotCardFace and the
 * Fool's Journey background scene.
 */
const CARD_ART = Object.fromEntries(
  Object.entries(
    import.meta.glob('../assets/cards/*.jpg', { eager: true, import: 'default' }),
  ).map(([path, url]) => {
    const num = Number(/(\d{2})_.*\.jpg$/.exec(path)?.[1])
    return [num, url as string]
  }),
) as Record<number, string>

export function getCardArt(num: number): string | undefined {
  return CARD_ART[num]
}
