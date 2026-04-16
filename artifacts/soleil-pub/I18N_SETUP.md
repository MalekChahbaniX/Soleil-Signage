# Multi-Language Setup Guide (French & Arabic)

Your Soleil Pub website is now configured with full multi-language support for French and Arabic with RTL (Right-to-Left) support for Arabic.

## ✨ What's Been Implemented

### 1. **i18next Integration**
- Installed `i18next` and `react-i18next`
- Created i18n configuration at `src/i18n/config.ts`
- Translation files organized in `src/i18n/locales/`:
  - `fr.json` - French translations
  - `ar.json` - Arabic translations

### 2. **Language Switcher Component**
- New `LanguageSwitcher` component located at `src/components/language-switcher.tsx`
- Dropdown selector with Globe icon in the top-right (or top-left for RTL)
- Persists language choice in browser localStorage

### 3. **RTL Support**
- Full right-to-left layout support for Arabic
- Automatic direction switching (`dir="rtl"` on root element)
- CSS utilities for RTL-aware layouts
- Custom CSS classes added to `src/index.css`:
  - `.ltr-only` - Hide on Arabic
  - `.rtl-only` - Hide on non-Arabic
  - RTL-aware margin and text-alignment utilities

### 4. **Updated Files**
- **App.tsx** - Wrapped with `I18nextProvider`, initializes direction
- **main.tsx** - Imports i18n config before rendering
- **home.tsx** - Uses `useTranslation()` hook for all content
- **package.json** - Added i18next dependencies

## 📁 File Structure

```
src/
├── i18n/
│   ├── config.ts              # i18n initialization
│   └── locales/
│       ├── fr.json            # French translations
│       └── ar.json            # Arabic translations
├── components/
│   └── language-switcher.tsx  # Language selector
└── pages/
    └── home.tsx               # Uses translation hook
```

## 🌍 How to Use Translations

### In Components

```tsx
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t, i18n } = useTranslation();
  
  // Access translations
  const title = t('services.title');
  
  // Check current language
  if (i18n.language === 'ar') {
    // Arabic-specific logic
  }
  
  return <h1>{title}</h1>;
}
```

### Translation File Structure

Keys use dot notation for namespacing:

```json
{
  "hero": {
    "badge": "Studio d'Exception",
    "title": "L'Art de l'Impression"
  },
  "services": {
    "digitalPrinting": {
      "title": "Impression Numérique",
      "description": "..."
    }
  }
}
```

## 🎨 Adding New Translations

### 1. Add to Both Translation Files
Edit `src/i18n/locales/fr.json`:
```json
{
  "newSection": {
    "title": "Mon Titre",
    "description": "Ma description"
  }
}
```

Edit `src/i18n/locales/ar.json`:
```json
{
  "newSection": {
    "title": "عنواني",
    "description": "وصفي"
  }
}
```

### 2. Use in Component
```tsx
<h1>{t('newSection.title')}</h1>
<p>{t('newSection.description')}</p>
```

## 🔄 Language Switching

Users can switch languages via:
1. **Language Switcher Component** - Located in top-right/left corner
2. **Programmatically** in code:
   ```tsx
   i18n.changeLanguage('ar'); // Switch to Arabic
   i18n.changeLanguage('fr'); // Switch to French
   ```

The language preference is stored in localStorage automatically.

## 💡 RTL Layout Tips

For RTL-aware components:

```tsx
import { useTranslation } from 'react-i18next';

export function Component() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  return (
    <div className={isArabic ? 'text-right' : 'text-left'}>
      {/* Content */}
    </div>
  );
}
```

### CSS Classes Available
- `html.rtl` - Applied when Arabic is active
- `ltr-only` - Hidden when Arabic is active
- `rtl-only` - Hidden when not Arabic

## 🚀 Default Language

Currently set to **French** as default. To change:

Edit `src/i18n/config.ts`:
```ts
lng: localStorage.getItem('i18nextLng') || 'ar', // Change to Arabic
```

## 📝 Current Translations Coverage

Fully translated sections:
- Hero section
- Services (all 5 services)
- Testimonials (3 testimonials)
- Contact / Footer sections
- Common UI elements

## ⚡ Performance Notes

- Translations are bundled directly in the app (no server requests)
- Language switching is instant
- Minimal bundle size impact (~15KB gzipped)

## 🐛 Troubleshooting

**Language not persisting?**
- Check browser localStorage is enabled
- Clear localStorage and try again

**RTL layout looks wrong?**
- Verify `document.documentElement.dir` is set correctly
- Check custom components don't have hardcoded `margin-left` or `text-align: left`

**Missing translation key?**
- Check JSON syntax in translation files
- Use browser console to see i18next warnings
- Extract full key path from error message

## 📚 Useful i18next Documentation

- [React i18next Docs](https://react.i18next.com/)
- [i18next Documentation](https://www.i18next.com/)

---

Your website is now ready for multi-language deployment! 🎉
