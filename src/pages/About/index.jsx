import React, { Component } from 'react';
import { useFeatureFlag } from 'configcat-react'

export default function About() {
    const { value: isMyFirstFeatureEnabledValue, loading: isMyFirstFeatureEnabledLoading } = useFeatureFlag("isMyFirstFeatureEnabled", false);
    const { value: enable_accessValue, loading: enable_accessLoading } = useFeatureFlag("enable_access", false);
    console.log('isMyFirstFeatureEnabledValue=', isMyFirstFeatureEnabledValue, 'enable_accessValue=', enable_accessValue)
    return <div>about</div>
}