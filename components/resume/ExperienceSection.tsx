import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Experience } from "@/types/resumeType";
import { resumeTheme } from "@/styles/resume-theme";

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: resumeTheme.fontSize.xl,
    fontWeight: "bold",
    color: resumeTheme.colors.heading,
    marginBottom: resumeTheme.spacing.md,
    marginTop: resumeTheme.spacing.md, // Réduit de lg à md
    borderBottom: `${resumeTheme.borderWidth.normal}px solid ${resumeTheme.colors.accent}`,
    paddingBottom: resumeTheme.spacing.xs,
    fontFamily: resumeTheme.fonts.bold,
  },
  experienceItem: {
    marginBottom: resumeTheme.spacing.lg, // Réduit de xl à lg
    paddingBottom: resumeTheme.spacing.md, // Réduit de lg à md
    borderBottomWidth: resumeTheme.borderWidth.thin,
    borderBottomColor: resumeTheme.colors.border,
  },
  role: {
    fontSize: resumeTheme.fontSize.lg,
    fontWeight: "bold",
    color: resumeTheme.colors.primary, // Noir profond pour le rôle
    marginBottom: resumeTheme.spacing.xs,
    fontFamily: resumeTheme.fonts.bold,
  },
  companyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: resumeTheme.spacing.xs,
  },
  company: {
    fontSize: resumeTheme.fontSize.md,
    color: resumeTheme.colors.secondary, // Gris moyen pour l'entreprise
    fontWeight: "bold",
    flex: 1,
    fontFamily: resumeTheme.fonts.bold,
  },
  logoContainer: {
    width: 24,
    height: 24,
    borderRadius: resumeTheme.borderRadius.sm,
    overflow: "hidden",
    border: `${resumeTheme.borderWidth.thin}px solid ${resumeTheme.colors.border}`,
    backgroundColor: resumeTheme.colors.card,
    marginLeft: resumeTheme.spacing.md,
  },
  logo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: resumeTheme.spacing.sm,
  },
  location: {
    fontSize: resumeTheme.fontSize.sm,
    color: resumeTheme.colors.muted,
    fontStyle: "italic",
    fontFamily: resumeTheme.fonts.primary,
  },
  duration: {
    fontSize: resumeTheme.fontSize.sm,
    color: resumeTheme.colors.destructive,
    fontWeight: "bold",
    fontFamily: resumeTheme.fonts.bold,
  },
  tasksList: {
    marginTop: resumeTheme.spacing.xs, // Réduit de sm à xs
  },
  task: {
    fontSize: resumeTheme.fontSize.sm,
    color: resumeTheme.colors.secondary,
    lineHeight: 1.2, // Réduit de 1.3 à 1.2
    marginBottom: resumeTheme.spacing.xs,
    paddingLeft: resumeTheme.spacing.md,
    fontFamily: resumeTheme.fonts.primary,
  },
});

interface ExperienceSectionProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const formatDate = (dateStr: string) => {
    if (dateStr === "Present") return "Present";
    const [year, month] = dateStr.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <View>
      <Text style={styles.sectionTitle}>EXPERIENCE</Text>
      {experience.map((exp, index) => (
        <View key={index} style={styles.experienceItem}>
          <Text style={styles.role}>{exp.role}</Text>

          <View style={styles.companyContainer}>
            <Text style={styles.company}>{exp.company}</Text>
            {exp.logo && (
              <View style={styles.logoContainer}>
                <Image style={styles.logo} src={exp.logo} />
              </View>
            )}
          </View>

          <View style={styles.details}>
            {exp.location && (
              <Text style={styles.location}>{exp.location}</Text>
            )}
            <Text style={styles.duration}>
              {formatDate(exp.start)} - {formatDate(exp.end)}
            </Text>
          </View>

          {exp.tasks && exp.tasks.length > 0 && (
            <View style={styles.tasksList}>
              {exp.tasks.map((task, taskIndex) => (
                <Text key={taskIndex} style={styles.task}>
                  • {task}
                </Text>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
}
