---
title: 'Use Supabase Auth with Next.js'
subtitle: 'Learn how to configure Supabase Auth for the Next.js App Router.'
breadcrumb: 'Auth Quickstarts'
hideToc: true
---

<script setup lang="ts">
import StepHike,{Step, StepDetails, StepCode } from '@components/StepHike'

</script>




<StepHike>
    <Step :step="1" >
      <StepDetails title="第一步标题">
          Head over to [database.new](https://database.new) and create a new Supabase project.
    Your new database has a table for storing your users. You can see that this table is currently empty by running some SQL in the [SQL Editor](https://supabase.com/dashboard/project/_/sql/new).
      </StepDetails>
      <StepCode>
        <pre> select * from auth.users;</pre>
      </StepCode>
    </Step>
  </StepHike>
