import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { Skills } from "@/types/resumeType";
import { resumeTheme } from "@/styles/resume-theme";

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
  categoryContainer: {
    marginBottom: resumeTheme.spacing.lg,
  },
  categoryTitle: {
    fontSize: resumeTheme.fontSize.base,
    fontWeight: "bold",
    color: resumeTheme.colors.subheading,
    marginBottom: resumeTheme.spacing.sm,
    fontFamily: resumeTheme.fonts.bold,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: resumeTheme.spacing.xs,
  },
  skillBadge: {
    backgroundColor: resumeTheme.colors.muted_background,
    borderRadius: resumeTheme.borderRadius.md,
    paddingHorizontal: resumeTheme.spacing.md,
    paddingVertical: resumeTheme.spacing.xs,
    marginRight: resumeTheme.spacing.xs,
    marginBottom: resumeTheme.spacing.xs,
    border: `${resumeTheme.borderWidth.thin}px solid ${resumeTheme.colors.border}`,
  },
  skillText: {
    fontSize: resumeTheme.fontSize.xs,
    color: resumeTheme.colors.secondary,
    fontFamily: resumeTheme.fonts.primary,
    fontWeight: "500",
  },
});

interface SkillsSectionProps {
  skills: Skills;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const renderSkillCategory = (title: string, skillList: string[]) => {
    if (!skillList || skillList.length === 0) return null;

    return (
      <View key={title} style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <View style={styles.skillsGrid}>
          {skillList.map((skill, index) => (
            <View key={index} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.sectionTitle}>SKILLS</Text>
      {Object.entries(skills).map(([category, skillList]) =>
        renderSkillCategory(category, skillList),
      )}
    </View>
  );
}
