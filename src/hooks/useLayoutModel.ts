import { computed } from "vue";
import { useDevicesSize } from "@/hooks/useDevicesSize";

interface LayoutModel {
  formLayout: ComputedRef<"vertical" | "horizontal">;
  tableFixed: ComputedRef<"" | "right">;
  descriptionsLayout: ComputedRef<"inline-vertical" | "right">;
  dialogWidth: (min?: string, max?: string) => string;
}
export const useLayoutModel = (): LayoutModel => {
  const { isMobile } = useDevicesSize();

  const formLayout = computed(() => (isMobile.value ? "vertical" : "horizontal"));

  const tableFixed = computed(() => (isMobile.value ? "" : "right"));

  const descriptionsLayout = computed(() => (isMobile.value ? "inline-vertical" : "right"));

  const dialogWidth = (min: string = "40%", max: string = "95%") => (isMobile.value ? max : min);

  return { formLayout, tableFixed, descriptionsLayout, dialogWidth };
};
