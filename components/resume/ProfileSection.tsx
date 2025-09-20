import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Profile } from "@/types/resumeType";
import { resumeTheme } from "@/styles/resume-theme";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: resumeTheme.spacing.xxl,
    paddingBottom: resumeTheme.spacing.lg,
    borderBottom: `${resumeTheme.borderWidth.thick}px solid ${resumeTheme.colors.heading}`,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: resumeTheme.spacing.xl,
    marginBottom: resumeTheme.spacing.lg,
    width: "100%",
    justifyContent: "center",
  },
  photoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    border: `${resumeTheme.borderWidth.thick}px solid ${resumeTheme.colors.accent}`,
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  textContainer: {
    alignItems: "flex-start",
    marginLeft: resumeTheme.spacing.xl,
  },
  name: {
    fontSize: resumeTheme.fontSize.name,
    fontWeight: "bold",
    color: resumeTheme.colors.heading,
    marginBottom: resumeTheme.spacing.sm,
    fontFamily: resumeTheme.fonts.bold,
  },
  title: {
    fontSize: resumeTheme.fontSize.title,
    color: resumeTheme.colors.accent,
    fontWeight: "medium",
    fontFamily: resumeTheme.fonts.primary,
  },
  summary: {
    fontSize: resumeTheme.fontSize.base,
    color: resumeTheme.colors.secondary,
    lineHeight: 1.3,
    textAlign: "left",
    marginTop: resumeTheme.spacing.md,
    paddingTop: resumeTheme.spacing.md,
    borderTop: `${resumeTheme.borderWidth.normal}px solid ${resumeTheme.colors.border}`,
    maxWidth: "85%",
    fontFamily: resumeTheme.fonts.primary,
  },
});

interface ProfileSectionProps {
  profile: Profile;
}

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <View style={styles.header}>
      <View style={styles.profileContainer}>
        {profile.photo && (
          <View style={styles.photoContainer}>
            <Image style={styles.photo} src={profile.photo} />
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
        </View>
      </View>

      {profile.summary && <Text style={styles.summary}>{profile.summary}</Text>}
    </View>
  );
}
