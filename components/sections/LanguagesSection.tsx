import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Language } from "@/types/resumeType";
import { theme } from "@/styles/theme";

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: "bold",
    color: theme.colors.heading,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.lg,
    borderBottom: `${theme.borderWidth.normal}px solid ${theme.colors.accent}`,
    paddingBottom: theme.spacing.xs,
    fontFamily: theme.fonts.bold,
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing.sm,
    alignItems: "center",
  },
  languageName: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary,
    fontFamily: theme.fonts.primary,
  },
  languageLevel: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.caption,
    fontStyle: "italic",
    fontFamily: theme.fonts.primary,
  },
});

interface LanguagesSectionProps {
  languages: Language[];
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <View>
      <Text style={styles.sectionTitle}>LANGUAGES</Text>

      {languages.map((lang, index) => (
        <View key={index} style={styles.languageItem}>
          <Text style={styles.languageName}>{lang.name}</Text>
          <Text style={styles.languageLevel}>{lang.level}</Text>
        </View>
      ))}
    </View>
  );
}
