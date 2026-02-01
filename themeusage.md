# Theme Usage Guide

This project uses `next-themes` with Tailwind CSS variables to support Light and Dark modes. Always use semantic class names instead of hardcoded colors (e.g., use `bg-background` instead of `bg-white`).

## Core Colors

| Category | Class | Description |
| :--- | :--- | :--- |
| **Backgrounds** | `bg-background` | Default page background (White in Light, Dark Gray in Dark) |
| | `bg-muted` | Muted background for secondary items (e.g., button backgrounds, cards) |
| | `bg-primary` | Primary brand color background (Buttons, active states) |
| | `bg-card` | Background for card components |
| | `bg-popover` | Background for popups, dropdowns, and modals |
| **Text** | `text-foreground` | Primary text color (Black in Light, White in Dark) |
| | `text-muted-foreground` | Secondary/Muted text (Gray) |
| | `text-primary-foreground` | Text color to use on top of `bg-primary` (usually White or Black depending on contrast) |
| | `text-destructive` | Error or destructive action text |
| **Borders** | `border-border` | Default border color |
| | `border-input` | specific border color for input fields |

## Examples

### 1. Standard Container with Text
```tsx
<div className="bg-background border border-border p-4 rounded-md">
  <h1 className="text-foreground font-bold">Page Title</h1>
  <p className="text-muted-foreground">This is a subtitle or description.</p>
</div>
```

### 2. Primary Button
```tsx
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Click Me
</Button>
```

### 3. Interactive/Muted Element (like a tag or secondary button)
```tsx
<div className="bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
  Tag Name
</div>
```

### 4. Input Field
```tsx
<input 
  className="bg-transparent border border-input text-foreground placeholder:text-muted-foreground"
  placeholder="Enter text..."
/>
```

> [!TIP]
> **Why strict semantic mapping?**
> A `bg-gray-100` might look good in Light mode, but it will remain bright in Dark mode. `bg-muted` will automatically become dark gray in Dark mode without you having to write `dark:bg-gray-800`.
