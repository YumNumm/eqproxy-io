export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      earthquake: {
        Row: {
          arrival_time: string | null;
          depth: number | null;
          epicenter_code: number | null;
          epicenter_detail_code: number | null;
          event_id: number;
          headline: string | null;
          intensity_cities: Json | null;
          intensity_prefectures: Json | null;
          intensity_regions: Json | null;
          intensity_stations: Json | null;
          latitude: number | null;
          longitude: number | null;
          lpgm_intensity_prefectures: Json | null;
          lpgm_intensity_regions: Json | null;
          lpgm_intenstiy_stations: Json | null;
          magnitude: number | null;
          magnitude_condition: string | null;
          max_intensity: Database["public"]["Enums"]["jma_intensity"] | null;
          max_intensity_region_ids: number[] | null;
          max_lpgm_intensity:
            | Database["public"]["Enums"]["jma_lg_intensity"]
            | null;
          origin_time: string | null;
          status: string;
          text: string | null;
        };
        Insert: {
          arrival_time?: string | null;
          depth?: number | null;
          epicenter_code?: number | null;
          epicenter_detail_code?: number | null;
          event_id: number;
          headline?: string | null;
          intensity_cities?: Json | null;
          intensity_prefectures?: Json | null;
          intensity_regions?: Json | null;
          intensity_stations?: Json | null;
          latitude?: number | null;
          longitude?: number | null;
          lpgm_intensity_prefectures?: Json | null;
          lpgm_intensity_regions?: Json | null;
          lpgm_intenstiy_stations?: Json | null;
          magnitude?: number | null;
          magnitude_condition?: string | null;
          max_intensity?: Database["public"]["Enums"]["jma_intensity"] | null;
          max_intensity_region_ids?: number[] | null;
          max_lpgm_intensity?:
            | Database["public"]["Enums"]["jma_lg_intensity"]
            | null;
          origin_time?: string | null;
          status: string;
          text?: string | null;
        };
        Update: {
          arrival_time?: string | null;
          depth?: number | null;
          epicenter_code?: number | null;
          epicenter_detail_code?: number | null;
          event_id?: number;
          headline?: string | null;
          intensity_cities?: Json | null;
          intensity_prefectures?: Json | null;
          intensity_regions?: Json | null;
          intensity_stations?: Json | null;
          latitude?: number | null;
          longitude?: number | null;
          lpgm_intensity_prefectures?: Json | null;
          lpgm_intensity_regions?: Json | null;
          lpgm_intenstiy_stations?: Json | null;
          magnitude?: number | null;
          magnitude_condition?: string | null;
          max_intensity?: Database["public"]["Enums"]["jma_intensity"] | null;
          max_intensity_region_ids?: number[] | null;
          max_lpgm_intensity?:
            | Database["public"]["Enums"]["jma_lg_intensity"]
            | null;
          origin_time?: string | null;
          status?: string;
          text?: string | null;
        };
        Relationships: [];
      };
      eew: {
        Row: {
          accuracy: Json | null;
          arrival_time: string | null;
          depth: number | null;
          event_id: number;
          forecast_max_intensity:
            | Database["public"]["Enums"]["jma_intensity"]
            | null;
          forecast_max_intensity_is_over: boolean | null;
          forecast_max_lpgm_intensity:
            | Database["public"]["Enums"]["jma_lg_intensity"]
            | null;
          forecast_max_lpgm_intensity_is_over: boolean | null;
          headline: string | null;
          hypo_name: string | null;
          id: number;
          info_type: string;
          is_canceled: boolean;
          is_last_info: boolean;
          is_plum: boolean;
          is_warning: boolean | null;
          latitude: number | null;
          longitude: number | null;
          magnitude: number | null;
          origin_time: string | null;
          regions: Json | null;
          report_time: string;
          schema_type: string;
          serial_no: number | null;
          status: string;
          type: string;
        };
        Insert: {
          accuracy?: Json | null;
          arrival_time?: string | null;
          depth?: number | null;
          event_id: number;
          forecast_max_intensity?:
            | Database["public"]["Enums"]["jma_intensity"]
            | null;
          forecast_max_intensity_is_over?: boolean | null;
          forecast_max_lpgm_intensity?:
            | Database["public"]["Enums"]["jma_lg_intensity"]
            | null;
          forecast_max_lpgm_intensity_is_over?: boolean | null;
          headline?: string | null;
          hypo_name?: string | null;
          id?: number;
          info_type: string;
          is_canceled: boolean;
          is_last_info: boolean;
          is_plum: boolean;
          is_warning?: boolean | null;
          latitude?: number | null;
          longitude?: number | null;
          magnitude?: number | null;
          origin_time?: string | null;
          regions?: Json | null;
          report_time?: string;
          schema_type: string;
          serial_no?: number | null;
          status: string;
          type: string;
        };
        Update: {
          accuracy?: Json | null;
          arrival_time?: string | null;
          depth?: number | null;
          event_id?: number;
          forecast_max_intensity?:
            | Database["public"]["Enums"]["jma_intensity"]
            | null;
          forecast_max_intensity_is_over?: boolean | null;
          forecast_max_lpgm_intensity?:
            | Database["public"]["Enums"]["jma_lg_intensity"]
            | null;
          forecast_max_lpgm_intensity_is_over?: boolean | null;
          headline?: string | null;
          hypo_name?: string | null;
          id?: number;
          info_type?: string;
          is_canceled?: boolean;
          is_last_info?: boolean;
          is_plum?: boolean;
          is_warning?: boolean | null;
          latitude?: number | null;
          longitude?: number | null;
          magnitude?: number | null;
          origin_time?: string | null;
          regions?: Json | null;
          report_time?: string;
          schema_type?: string;
          serial_no?: number | null;
          status?: string;
          type?: string;
        };
        Relationships: [];
      };
      information: {
        Row: {
          author: Database["public"]["Enums"]["information_author"];
          body: Json;
          created_at: string;
          event_id: number | null;
          id: number;
          level: Database["public"]["Enums"]["information_level"];
          title: string;
          type: string;
        };
        Insert: {
          author?: Database["public"]["Enums"]["information_author"];
          body: Json;
          created_at?: string;
          event_id?: number | null;
          id?: number;
          level: Database["public"]["Enums"]["information_level"];
          title: string;
          type: string;
        };
        Update: {
          author?: Database["public"]["Enums"]["information_author"];
          body?: Json;
          created_at?: string;
          event_id?: number | null;
          id?: number;
          level?: Database["public"]["Enums"]["information_level"];
          title?: string;
          type?: string;
        };
        Relationships: [];
      };
      intensity_sub_division: {
        Row: {
          area_code: string;
          event_id: number;
          id: number;
          max_intensity: Database["public"]["Enums"]["jma_intensity"];
          max_lpgm_intensity:
            | Database["public"]["Enums"]["jma_lg_intensity"]
            | null;
        };
        Insert: {
          area_code: string;
          event_id: number;
          id?: number;
          max_intensity: Database["public"]["Enums"]["jma_intensity"];
          max_lpgm_intensity?:
            | Database["public"]["Enums"]["jma_lg_intensity"]
            | null;
        };
        Update: {
          area_code?: string;
          event_id?: number;
          id?: number;
          max_intensity?: Database["public"]["Enums"]["jma_intensity"];
          max_lpgm_intensity?:
            | Database["public"]["Enums"]["jma_lg_intensity"]
            | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_intensity_sub_division_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "earthquake";
            referencedColumns: ["event_id"];
          },
        ];
      };
      telegram: {
        Row: {
          body: Json;
          event_id: number;
          headline: string | null;
          id: number;
          info_type: string;
          press_time: string;
          report_time: string;
          schema_type: string;
          serial_no: number | null;
          status: string;
          type: string;
          valid_time: string | null;
        };
        Insert: {
          body: Json;
          event_id: number;
          headline?: string | null;
          id?: number;
          info_type: string;
          press_time: string;
          report_time: string;
          schema_type: string;
          serial_no?: number | null;
          status: string;
          type: string;
          valid_time?: string | null;
        };
        Update: {
          body?: Json;
          event_id?: number;
          headline?: string | null;
          id?: number;
          info_type?: string;
          press_time?: string;
          report_time?: string;
          schema_type?: string;
          serial_no?: number | null;
          status?: string;
          type?: string;
          valid_time?: string | null;
        };
        Relationships: [];
      };
      tsunami: {
        Row: {
          body: Json;
          event_id: number;
          headline: string | null;
          id: number;
          info_type: string;
          press_at: string;
          report_at: string;
          serial_no: number | null;
          status: string;
          type: string;
          valid_at: string | null;
        };
        Insert: {
          body: Json;
          event_id: number;
          headline?: string | null;
          id?: number;
          info_type: string;
          press_at: string;
          report_at: string;
          serial_no?: number | null;
          status: string;
          type: string;
          valid_at?: string | null;
        };
        Update: {
          body?: Json;
          event_id?: number;
          headline?: string | null;
          id?: number;
          info_type?: string;
          press_at?: string;
          report_at?: string;
          serial_no?: number | null;
          status?: string;
          type?: string;
          valid_at?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      eew_latest: {
        Row: {
          arrival_time: string | null;
          depth: number | null;
          event_id: number | null;
          forecast_max_intensity:
            | Database["public"]["Enums"]["jma_intensity"]
            | null;
          forecast_max_lpgm_intensity:
            | Database["public"]["Enums"]["jma_lg_intensity"]
            | null;
          headline: string | null;
          hypo_name: string | null;
          id: number | null;
          info_type: string | null;
          is_canceled: boolean | null;
          is_last_info: boolean | null;
          is_warning: boolean | null;
          latitude: number | null;
          longitude: number | null;
          magnitude: number | null;
          origin_time: string | null;
          regions: Json | null;
          schema_type: string | null;
          serial_no: number | null;
          status: string | null;
          type: string | null;
        };
        Relationships: [];
      };
    };
    Functions: {
      latest_eew: {
        Args: Record<PropertyKey, never>;
        Returns: {
          accuracy: Json | null;
          arrival_time: string | null;
          depth: number | null;
          event_id: number;
          forecast_max_intensity:
            | Database["public"]["Enums"]["jma_intensity"]
            | null;
          forecast_max_intensity_is_over: boolean | null;
          forecast_max_lpgm_intensity:
            | Database["public"]["Enums"]["jma_lg_intensity"]
            | null;
          forecast_max_lpgm_intensity_is_over: boolean | null;
          headline: string | null;
          hypo_name: string | null;
          id: number;
          info_type: string;
          is_canceled: boolean;
          is_last_info: boolean;
          is_plum: boolean;
          is_warning: boolean | null;
          latitude: number | null;
          longitude: number | null;
          magnitude: number | null;
          origin_time: string | null;
          regions: Json | null;
          report_time: string;
          schema_type: string;
          serial_no: number | null;
          status: string;
          type: string;
        }[];
      };
      uuid_generate_v7: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
    };
    Enums: {
      information_author: "jma" | "developer" | "unknown";
      information_level: "info" | "warning" | "critical";
      jma_intensity:
        | "0"
        | "1"
        | "2"
        | "3"
        | "4"
        | "!5-"
        | "5-"
        | "5+"
        | "6-"
        | "6+"
        | "7";
      jma_lg_intensity: "0" | "1" | "2" | "3" | "4";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey";
            columns: ["bucket_id"];
            isOneToOne: false;
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: string[];
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
