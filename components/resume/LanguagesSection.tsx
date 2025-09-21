import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { resumeTheme } from "@/styles/resume-theme";
import type { Language } from "@/types/resumeType";

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: resumeTheme.fontSize.xl,
    fontWeight: "bold",
    color: resumeTheme.colors.heading,
    marginBottom: resumeTheme.spacing.md,
    marginTop: resumeTheme.spacing.lg,
    borderBottom: `${resumeTheme.borderWidth.normal}px solid ${resumeTheme.colors.accent}`,
    paddingBottom: resumeTheme.spacing.xs,
    fontFamily: resumeTheme.fonts.bold,
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: resumeTheme.spacing.sm,
    alignItems: "center",
  },
  languageName: {
    fontSize: resumeTheme.fontSize.sm,
    color: resumeTheme.colors.primary,
    fontFamily: resumeTheme.fonts.primary,
  },
  languageLevel: {
    fontSize: resumeTheme.fontSize.sm,
    color: resumeTheme.colors.caption,
    fontStyle: "italic",
    fontFamily: resumeTheme.fonts.primary,
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
