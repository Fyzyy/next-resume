import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { resumeTheme } from "@/styles/resume-theme";
import type { Project } from "@/types/resumeType";

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: resumeTheme.fontSize.xl,
    fontWeight: "bold",
    color: resumeTheme.colors.heading,
    marginBottom: resumeTheme.spacing.md,
    marginTop: resumeTheme.spacing.sm,
    borderBottom: `${resumeTheme.borderWidth.normal}px solid ${resumeTheme.colors.accent}`,
    paddingBottom: resumeTheme.spacing.xs,
    fontFamily: resumeTheme.fonts.bold,
  },
  projectItem: {
    marginBottom: resumeTheme.spacing.md,
    paddingBottom: resumeTheme.spacing.sm,
    borderBottomWidth: resumeTheme.borderWidth.thin,
    borderBottomColor: resumeTheme.colors.border,
  },
  projectName: {
    fontSize: resumeTheme.fontSize.md,
    fontWeight: "bold",
    color: resumeTheme.colors.primary,
    marginBottom: resumeTheme.spacing.xs,
    fontFamily: resumeTheme.fonts.bold,
  },
  projectRole: {
    fontSize: resumeTheme.fontSize.sm,
    color: resumeTheme.colors.secondary,
    marginBottom: resumeTheme.spacing.xs,
    fontFamily: resumeTheme.fonts.primary,
  },
  projectDuration: {
    fontSize: resumeTheme.fontSize.sm,
    color: resumeTheme.colors.destructive,
    marginBottom: resumeTheme.spacing.xs,
    fontFamily: resumeTheme.fonts.bold,
  },
  tasksList: {
    marginTop: resumeTheme.spacing.xs,
  },
  task: {
    fontSize: resumeTheme.fontSize.sm,
    color: resumeTheme.colors.secondary,
    lineHeight: 1.2,
    marginBottom: resumeTheme.spacing.xs,
    paddingLeft: resumeTheme.spacing.md,
    fontFamily: resumeTheme.fonts.primary,
  },
  technologiesContainer: {
    marginTop: resumeTheme.spacing.sm,
  },
  technologiesTitle: {
    fontSize: resumeTheme.fontSize.sm,
    fontWeight: "bold",
    color: resumeTheme.colors.primary,
    marginBottom: resumeTheme.spacing.xs,
    fontFamily: resumeTheme.fonts.bold,
  },
  technologiesText: {
    fontSize: resumeTheme.fontSize.sm,
    color: resumeTheme.colors.secondary,
    lineHeight: 1.2,
    fontFamily: resumeTheme.fonts.primary,
  },
  placeholderText: {
    fontSize: resumeTheme.fontSize.sm,
    color: resumeTheme.colors.caption,
    fontStyle: "italic",
    fontFamily: resumeTheme.fonts.primary,
  },
});

interface ProjectsSectionProps {
  projects?: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
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
    return `${months[parseInt(month, 10) - 1]} ${year}`;
  };

  // Limiter à 2 projets les plus récents pour le CV
  const limitedProjects = projects?.slice(0, 2) || [];

  return (
    <View>
      <Text style={styles.sectionTitle}>PROJECTS</Text>
      {limitedProjects && limitedProjects.length > 0 ? (
        limitedProjects.map((project, index) => (
          <View key={index} style={styles.projectItem}>
            <Text style={styles.projectName}>{project.name}</Text>
            <Text style={styles.projectRole}>{project.role}</Text>
            <Text style={styles.projectDuration}>
              {formatDate(project.start)} - {formatDate(project.end)}
            </Text>

            {project.tasks && project.tasks.length > 0 && (
              <View style={styles.tasksList}>
                {project.tasks.map((task, taskIndex) => (
                  <Text key={taskIndex} style={styles.task}>
                    • {task}
                  </Text>
                ))}
              </View>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <View style={styles.technologiesContainer}>
                <Text style={styles.technologiesTitle}>Technologies:</Text>
                <Text style={styles.technologiesText}>
                  {project.technologies.join(" • ")}
                </Text>
              </View>
            )}
          </View>
        ))
      ) : (
        <Text style={styles.placeholderText}>No projects available</Text>
      )}
    </View>
  );
}
