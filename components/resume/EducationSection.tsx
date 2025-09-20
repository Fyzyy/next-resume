import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {Education} from "@/types/resumeType";
import {resumeTheme} from "@/styles/resume-theme";

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
  educationItem: {
    marginBottom: resumeTheme.spacing.lg,
    paddingBottom: resumeTheme.spacing.sm,
    borderBottomWidth: resumeTheme.borderWidth.thin,
    borderBottomColor: resumeTheme.colors.border,
  },
  degree: {
    fontSize: resumeTheme.fontSize.base,
    fontWeight: "bold",
    color: resumeTheme.colors.primary,
    marginBottom: resumeTheme.spacing.xs,
    fontFamily: resumeTheme.fonts.bold,
  },
  school: {
    fontSize: resumeTheme.fontSize.sm,
    color: resumeTheme.colors.accent,
    marginBottom: resumeTheme.spacing.xs,
    fontFamily: resumeTheme.fonts.primary,
  },
  duration: {
    fontSize: resumeTheme.fontSize.xs,
    color: resumeTheme.colors.caption,
    fontFamily: resumeTheme.fonts.primary,
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
