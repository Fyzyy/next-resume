import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Education } from "@/types/resumeType";
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
  educationItem: {
    marginBottom: theme.spacing.lg,
    paddingBottom: theme.spacing.sm,
    borderBottomWidth: theme.borderWidth.thin,
    borderBottomColor: theme.colors.border,
  },
  degree: {
    fontSize: theme.fontSize.base,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
    fontFamily: theme.fonts.bold,
  },
  school: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.accent,
    marginBottom: theme.spacing.xs,
    fontFamily: theme.fonts.primary,
  },
  duration: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.caption,
    fontFamily: theme.fonts.primary,
  },
});

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <View>
      <Text style={styles.sectionTitle}>EDUCATION</Text>
      {education.map((edu, index) => (
        <View key={index} style={styles.educationItem}>
          <Text style={styles.degree}>{edu.degree}</Text>
          <Text style={styles.school}>{edu.school}</Text>
          {(edu.start || edu.end) && (
            <Text style={styles.duration}>
              {edu.start} - {edu.end}
            </Text>
          )}
        </View>
      ))}
    </View>
  );
}
