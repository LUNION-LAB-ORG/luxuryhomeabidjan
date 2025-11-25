'use client';
import React, { Suspense } from 'react';
import SearchPageContent from '@/components/search/search-page-content';

function SearchPage() {

  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><p>Chargement...</p></div>}>
      <SearchPageContent />
    </Suspense>
  );
}

export default SearchPage;