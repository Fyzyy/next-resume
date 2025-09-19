import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Skills } from "@/types/resumeType";
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
  categoryContainer: {
    marginBottom: theme.spacing.lg,
  },
  categoryTitle: {
    fontSize: theme.fontSize.base,
    fontWeight: "bold",
    color: theme.colors.subheading,
    marginBottom: theme.spacing.sm,
    fontFamily: theme.fonts.bold,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.xs,
  },
  skillBadge: {
    backgroundColor: theme.colors.muted_background,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    marginRight: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
    border: `${theme.borderWidth.thin}px solid ${theme.colors.border}`,
  },
  skillText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.secondary,
    fontFamily: theme.fonts.primary,
    fontWeight: "500",
  },
  professionalBadge: {
    backgroundColor: theme.colors.accent,
    border: `${theme.borderWidth.thin}px solid ${theme.colors.primary}`,
  },
  professionalText: {
    color: theme.colors.background,
    fontWeight: "bold",
  },
  toolsBadge: {
    backgroundColor: theme.colors.card,
    border: `${theme.borderWidth.normal}px solid ${theme.colors.accent}`,
  },
  languagesBadge: {
    backgroundColor: theme.colors.background,
    border: `${theme.borderWidth.normal}px solid ${theme.colors.muted}`,
  },
});

interface SkillsSectionProps {
  skills: Skills;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const getBadgeStyle = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes('professional') || lowerCategory.includes('stack')) {
      return [styles.skillBadge, styles.professionalBadge];
    } else if (lowerCategory.includes('tools')) {
      return [styles.skillBadge, styles.toolsBadge];
    } else if (lowerCategory.includes('languages')) {
      return [styles.skillBadge, styles.languagesBadge];
    }
    return [styles.skillBadge];
  };

  const getTextStyle = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes('professional') || lowerCategory.includes('stack')) {
      return [styles.skillText, styles.professionalText];
    }
    return [styles.skillText];
  };

  const renderSkillCategory = (title: string, skillList: string[]) => {
    if (!skillList || skillList.length === 0) return null;

    return (
      <View key={title} style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <View style={styles.skillsGrid}>
          {skillList.map((skill, index) => (
            <View key={index} style={getBadgeStyle(title)}>
              <Text style={getTextStyle(title)}>{skill}</Text>
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
