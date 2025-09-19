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
  categoryTitle: {
    fontSize: theme.fontSize.base,
    fontWeight: "bold",
    color: theme.colors.subheading,
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.md,
    fontFamily: theme.fonts.bold,
  },
  skillItem: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.secondary, // Changé de muted vers secondary pour plus de contraste
    marginBottom: theme.spacing.xs,
    paddingLeft: theme.spacing.sm,
    fontFamily: theme.fonts.primary,
  },
});

interface SkillsSectionProps {
  skills: Skills;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const renderSkillCategory = (title: string, skillList: string[]) => {
    if (!skillList || skillList.length === 0) return null;

    return (
      <View key={title}>
        <Text style={styles.categoryTitle}>{title}</Text>
        {skillList.map((skill, index) => (
          <Text key={index} style={styles.skillItem}>
            • {skill}
          </Text>
        ))}
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
